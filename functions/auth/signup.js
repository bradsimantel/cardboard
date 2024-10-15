import bcrypt from "bcryptjs";

export const onRequestPost = async (context) => {
  try {
    const { DB } = context.env;
    const { email, password } = await context.request.json();

    const sql = "SELECT * FROM users WHERE email = ?";
    const user = await DB.prepare(sql).bind(email).first();

    if (user) {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const hashedPassword = await bcrypt.hashSync(password, 8);
      const insertSql =
        "INSERT INTO users (email, password) VALUES (?, ?) RETURNING *";

      const newUser = await DB.prepare(insertSql)
        .bind(email, hashedPassword)
        .first();

      return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
