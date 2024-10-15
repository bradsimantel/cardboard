export const onRequestPut = async (context) => {
  try {
    const { DB } = context.env;
    const { name, email, password, backgroundColor, foregroundColor } =
      await context.request.json();

    const sql = `
      UPDATE users
      SET name = ?, email = ?, password = ?, background_color = ?, foreground_color = ?
      WHERE id = ?
      RETURNING *
    `;
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
