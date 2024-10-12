// List
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const sql = "SELECT * FROM tasks ORDER BY created_at DESC";
    const { results } = await DB.prepare(sql).all();

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Create
export const onRequestPost = async (context) => {
  try {
    const { DB } = context.env;
    const { organizationId, name } = await context.request.json();
    const sql =
      "INSERT INTO tasks (organization_id, name) VALUES (?, ?) RETURNING *";
    const task = await DB.prepare(sql).bind(organizationId, name).first();

    return new Response(JSON.stringify(task), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
