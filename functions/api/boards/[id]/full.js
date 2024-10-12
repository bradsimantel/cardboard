// Show
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const id = Number(context.params.id);
    const sql = `
      SELECT 
      b.*, 
      json_group_array(
        json_object(
          'id', c.id, 
          'name', c.name, 
          'position', c.position, 
          'cards', (
            SELECT json_group_array(
              json_object(
                'id', ca.id, 
                'name', ca.name, 
                'position', ca.position, 
                'assignee', (
                  SELECT json_object(
                    'id', u.id, 
                    'name', u.name
                  )
                  FROM users u
                  WHERE u.id = ca.assignee_id
                ),
                'category', (
                  SELECT json_object(
                    'id', cat.id,
                    'name', cat.name
                  )
                  FROM categories cat
                  JOIN card_categories cc ON cc.category_id = cat.id
                  WHERE cc.card_id = ca.id
                )
              )
              ORDER BY ca.position ASC
            )
            FROM cards ca
            WHERE ca.column_id = c.id
          )
        )
      ) as columns
      FROM boards b
      LEFT JOIN columns c ON c.board_id = b.id
      WHERE b.id = ?
      GROUP BY b.id
    `;

    const board = await DB.prepare(sql).bind(id).first();
    const parsed = { ...board, columns: JSON.parse(board.columns) };
    parsed.columns.forEach((column) => {
      column.cards = column.cards.map((card) => JSON.parse(card));
    });

    if (!board) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(parsed), {
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
