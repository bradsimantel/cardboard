import bcrypt from "bcryptjs";

export const onRequestPost = async (context) => {
  try {
    const { DB } = context.env;
    const { email, password } = await context.request.json();
    const sql = "SELECT * FROM users WHERE email = ?";
    const user = await DB.prepare(sql).bind(email).first();

    if (!user) {
      return new Response(null, {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const isValid = await bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return new Response(null, {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ token }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
