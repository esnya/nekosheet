import config from 'config';
import Knex from 'knex';

export const knex = Knex(config.get('database'));

export const initTable = () => {
    if (!knex) return;

    const tables = {
        characters: (table) => {
            table.string('id').primary();
            table.string('user_id').notNullable();
            table.string('name').notNullable();
            table.string('type').notNullable();
            table.json('data').nullable();
            table
                .timestamp('created')
                .notNullable()
                .default(knex.fn.now());
            table
                .timestamp('modified')
                .notNullable()
                .default(knex.fn.now());
            table.timestamp('deleted').nullable().default(null);
        },
        images: (table) => {
            table.string('id').primary();
            table.string('user_id').notNullable();
            table.string('type').notNullable();

            const client = config.get('database.client');
            if (client.match(/^mysql2?$/)) {
                table.specificType('data', 'MEDIUMBLOB');
            } else {
                table.binary('data');
            }

            table
                .timestamp('created')
                .notNullable()
                .default(knex.fn.now());
            table
                .timestamp('modified')
                .notNullable()
                .default(knex.fn.now());
            table.timestamp('deleted').nullable().default(null);
        },
    };

    return Promise.all(
        Object.keys(tables)
            .map(
                (name) => knex.schema
                    .hasTable(name)
                    .then(
                        (exists) =>
                            exists ||
                                knex.schema.createTable(name, tables[name])
                    )
            )
    ).then(() => {});
};
initTable();
