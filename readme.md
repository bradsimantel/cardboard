# Cardboard

A simple themeable kanban board.

## Development

Run `npm run dev` to start `wrangler`, `tailwind`, and `esbuild` in dev mode.

## Migrations

Run `npm run db:migrate` to run migrations against your local development database, or `npm run db:migrate:production` to run migrations against the production database.

You can use `npm run db:drop` to delete the local development DB (helpful while messing with migrations).

## To Do

- [ ] Card modal or pane, with deep linking
- [ ] Add or delete cards
- [ ] Add, rename, or remove columns
- [ ] Add, rename, or remove boards
- [ ] Subtasks as checkboxes
- [ ] CSS dithering: https://cohost.org/-12/post/185483-css-dithering-filter

- [ ] Decide if I need full SortableJS or can drop default plugins
- [ ] Or use pragmatic drag and drop: https://atlassian.design/components/pragmatic-drag-and-drop/core-package/


- [ ] Are migrations run on pages deploy, or only manually?

- [ ] Adopt an ORM or something
  - [List of options](https://developers.cloudflare.com/d1/reference/community-projects/)
  - [Basic D1 query builder](https://github.com/aminroosta/sqlite-cloudflare-d1)
  - [Rawdog](https://developers.cloudflare.com/d1/build-with-d1/d1-client-api)
  - [sql-template-tag](https://github.com/blakeembrey/sql-template-tag)
  - [Flyweight, mostly for the `json_object` stuff](https://github.com/thebinarysearchtree/flyweight)
    - Could I get this in a template tag function?