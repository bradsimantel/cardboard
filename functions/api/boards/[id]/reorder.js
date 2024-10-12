export async function onRequestPut(context) {
  try {
    const { DB } = context.env;
    const {
      cardId,
      sourceColumnId,
      sourcePosition,
      destinationColumnId,
      destinationPosition,
    } = await context.request.json();

    // const test = {
    //   cardId: 3,
    //   destinationColumnId: 1,
    //   destinationPosition: 0,
    //   sourceColumnId: 1,
    //   sourcePosition: 1,
    // };

    const updateSourceColumn = `UPDATE cards SET position = position - 1 WHERE column_id = ? AND position > ?`;
    await DB.prepare(updateSourceColumn)
      .bind(sourceColumnId, sourcePosition)
      .run();

    const updateDestinationColumn = `UPDATE cards SET position = position + 1 WHERE column_id = ? AND position >= ?`;
    await DB.prepare(updateDestinationColumn)
      .bind(destinationColumnId, destinationPosition)
      .run();

    const updateCard = `UPDATE cards SET column_id = ?, position = ? WHERE id = ?`;
    await DB.prepare(updateCard)
      .bind(destinationColumnId, destinationPosition, cardId)
      .run();

    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
