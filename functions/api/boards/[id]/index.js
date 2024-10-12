// Show
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const id = Number(context.params.id);
    const sql = "SELECT * FROM boards WHERE id = ?";
    const card = await DB.prepare(sql).bind(id).first();

    if (!card) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(card), {
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
