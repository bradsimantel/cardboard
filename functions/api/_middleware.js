// async function errorHandling(context) {
//   try {
//     return await context.next();
//   } catch (err) {
//     return new Response(`${err.message}\n${err.stack}`, { status: 500 });
//   }
// }

function authentication(context) {
  //   if (context.request.headers.get("x-email") != "admin@example.com") {
  //     return new Response("Unauthorized", { status: 403 });
  //   }

  // Add the user to the context
  context.user = { email: "admin@example.com" };

  return context.next();
}

// export const onRequest = [errorHandling, authentication];
export const onRequest = [authentication];
