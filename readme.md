# Stark

A simple, two-color kanban board.

## Development

Use `caddy run` to start a dev server, then go to `http://localhost` to see the app.

## To Do

- [ ] The board should scroll when it overflows
- [ ] Task modal
- [ ] Add or delete tasks
- [ ] Add, rename, or remove columns
- [ ] Add, rename, or remove boards
- [ ] Subtasks as checkboxes
- [ ] Decide if I need full SortableJS or can drop default plugins
- [ ] Or use pragmatic drag and drop: https://atlassian.design/components/pragmatic-drag-and-drop/core-package/


- how do methods work? post vs get?
- development db?
- are migrations run on pages deploy, or only manually?
- query inspo: https://github.com/aminroosta/sqlite-cloudflare-d1/blob/master/src/index.ts
- more query inspo: https://developers.cloudflare.com/d1/build-with-d1/d1-client-api/#await-stmtfirstcolumn