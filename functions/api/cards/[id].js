// Show
export async function onRequestGet(context) {
  try {
    const { DB } = context.env;
    const id = Number(context.params.id);
    const sql = "SELECT * FROM tasks WHERE id = ?";
    const task = await DB.prepare(sql).bind(id).first();

    if (!task) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(task), {
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
    const sql = "UPDATE tasks SET name = ? WHERE id = ? RETURNING *";
    const task = await DB.prepare(sql).bind(name, id).first();

    if (!task) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify(task), {
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
    const sql = "DELETE FROM tasks WHERE id = ?";

    await DB.prepare(sql).bind(id).run();
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
