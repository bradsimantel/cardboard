export async function onRequest(context) {
  // Get the D1 database binding
  const { DB } = context.env;

  try {
    // Execute the SQL query to fetch all boards
    const { results } = await DB.prepare(
      "SELECT * FROM boards ORDER BY created_at DESC"
    ).all();

    // Return the boards as a JSON response
    return new Response(JSON.stringify({ boards: results }), {
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
