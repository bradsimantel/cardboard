export async function onRequest(context) {
  // Get the D1 database binding
  const { DB } = context.env;
  const { id } = context.params; // Extract the board_id from the URL path

  try {
    // Execute the SQL query to fetch all tasks for the specified board_id
    const { results } = await DB.prepare(
      "SELECT * FROM tasks WHERE board_id = ? ORDER BY created_at DESC"
    )
      .bind(id)
      .all();

    // Return the tasks as a JSON response
    return new Response(JSON.stringify({ tasks: results }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // If there's an error, return a 500 Internal Server Error
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
