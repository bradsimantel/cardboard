// Show
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const id = Number(context.params.id);
    const boardSql = "SELECT * FROM boards WHERE id = ?";
    const board = await DB.prepare(boardSql).bind(id).first();
    const colSql = "SELECT * FROM columns WHERE board_id = ?";
    const { results: columns } = await DB.prepare(colSql).bind(id).all();
    const cardSql = "SELECT * FROM cards WHERE board_id = ?";
    const { results: cards } = await DB.prepare(cardSql).bind(id).all();
    const userSql = "SELECT * FROM users WHERE id IN (?)";
    const uniqueAssigneeIds = [
      ...new Set(
        cards.map((card) => card.assignee_id).filter((id) => id !== null)
      ),
    ];
    const { results: users } = await DB.prepare(userSql)
      .bind(uniqueAssigneeIds.join(","))
      .all();

    cards.forEach((card) => {
      if (card.assignee_id) {
        const assignee = users.find((user) => user.id === card.assignee_id);
        if (assignee) {
          card.assignee = assignee;
        }
      }
    });

    if (!board || !columns || !cards) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const hydratedBoard = {
        ...board,
        columns: columns
          .sort((a, b) => a.position - b.position)
          .map((column) => ({
            ...column,
            cards: cards
              .filter((card) => card.column_id === column.id)
              .sort((a, b) => a.position - b.position),
          })),
      };

      return new Response(JSON.stringify(hydratedBoard), {
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Update
export async function onRequestPut(context) {
  try {
    const { DB } = context.env;
    const { name } = await context.request.json();
    const id = Number(context.params.id);
    const sql = "UPDATE boards SET name = ? WHERE id = ? RETURNING *";
    const board = await DB.prepare(sql).bind(name, id).first();

    if (!board) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(board), {
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Destroy
export async function onRequestDelete(context) {
  try {
    const { DB } = context.env;
    const id = Number(context.params.id);
    const sql = "DELETE FROM boards WHERE id = ?";

    await DB.prepare(sql).bind(id).run();
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
