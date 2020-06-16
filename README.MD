# Scavenger Hunt

This started off as just learning how to use Knex.js and Objection.js. Now it's becoming a new boilerplate or the start of something.

## Knex.js and Objection.js

**[Knex.js](http://knexjs.org/)** lets you query the db using SQL.

**[Objection.js](https://vincit.github.io/objection.js/)** uses knex.js and makes an ORM (Object-relational mapping).

## Commands

- **default** - nps start
- **serve** - Serves the current app and watches for changes to restart it -
  `nps banner.serve && webpack && nodemon ./src/index.ts web`
- **developing** - `concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch --info-verbosity verbose' 'nodemon ./src/index.ts web'`
- **webpack** - `nps banner.webpack && concurrently -c 'bgBlue.bold,bgMagenta.bold' -n 'webpack,server' 'webpack --watch --info-verbosity verbose' 'ts-node --transpile-only ./src/index.ts web'`
- **build** - `nps banner.build && nps transpile`
- **clean** - Deletes the ./dist folder - `nps banner.clean && nps clean.dist`
- **db.scripts** - use `knex migrate:make migration_name -x ts`

nothing
