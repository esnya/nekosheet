import config from 'config';
import Knex from 'knex';

export const knex = Knex(config.get('database'));

export const initTable = () => {
    if (!knex) return;

    return knex.schema.hasTable('characters')
        .then((exists) => {
            if (exists) return;

            return knex.schema.createTable('characters', (table) => {
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
            });
        })
        .then(() => {});
};
initTable();
