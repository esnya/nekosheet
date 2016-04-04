import {json} from 'body-parser';
import config from 'config';
import livereload from 'connect-livereload';
import {createHash} from 'crypto';
import express from 'express';
import _, {fromPairs, map, merge, reject, set} from 'lodash';
import {connectLogger, getLogger} from 'log4js';
import {join} from 'path';
import {knex} from './knex';

const production = process.env.NODE_ENV === 'production';

const path = {
    dist: join(__dirname, '../../dist'),
    public: join(__dirname, '../../public'),
    sanitize: join(__dirname, '../../node_modules/sanitize.css'),
    views: join(__dirname, '../../views'),
};

const script = production ? 'js/browser.min.js' : 'js/browser.js';

export const router = (app) => {
    const logger = getLogger('[express]');
    app.use(connectLogger(logger));

    app.set('view engine', 'jade');
    app.set('views', path.views);

    app.use(express.static(path.public));
    app.use(express.static(path.dist));
    app.use('/css', express.static(path.sanitize));

    if (!production) app.use(livereload());

    app.get('/', (req, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .orderBy('created', 'ASC')
            .then((characters) => res.render('index', {
                script,
                route: {
                    route: 'Home',
                },
                state: {
                    types: config.types,
                    characters,
                },
            }))
            .catch(next)
    );

    const getCharacter = (id) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', id)
            .first()
            .then((character) => character || Promise.reject('Not Found'))
            .then((character) => ({
                ...character,
                data: character.data && JSON.parse(character.data),
            }));
    app.get('/:id([0-9a-f]+).json', (req, res, next) =>
        getCharacter(req.params.id)
            .then((character) => res.send(character))
            .catch(next)
    );
    app.get('/:id([0-9a-f]+)', (req, res, next) =>
        getCharacter(req.params.id)
            .then((character) => {
                if (!req.accepts('html') && req.accepts('json')) {
                    return res.send(character);
                }

                return res.render('index', {
                    script,
                    route: {
                        route: 'Character',
                        params: req.params,
                    },
                    state: {
                        types: config.types,
                        character,
                    },
                });
            })
            .catch(next)
    );

    app.post('/', json(), (req, res, next) => {
        const id = createHash('sha1')
            .update(`{${Math.random() * Date.now()}`)
            .digest('hex');

        return knex('characters')
            .insert({
                ..._(req.body)
                    .pick(['name', 'type'])
                    .mapValues((a) => a || null)
                    .value(),
                id,
                user_id: 'guest',
            })
            .then(() => res.send({
                status: 'OK',
                id,
            }))
            .catch(next);
    });

    app.put('/:id/name', json(), (req, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', req.params.id)
            .update('name', req.body.value || null)
            .then(
                () => knex('characters')
                    .whereNull('deleted')
                    .where('id', req.params.id)
                    .first()
            )
            .then((character) => res.send(character))
            .catch(next)
    );
    app.put('/:id/:key', json(), (req, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', req.params.id)
            .first()
            .then((character) => character || Promise.reject('Not Found'))
            .then(
                ({data}) => merge(
                    data ? JSON.parse(data) : {},
                    fromPairs([[req.params.key, req.body.value]])
                )
            )
            .then(
                (data) => knex('characters')
                    .whereNull('deleted')
                    .where('id', req.params.id)
                    .update('data', JSON.stringify(data))
            )
            .then(
                () => knex('characters')
                    .whereNull('deleted')
                    .where('id', req.params.id)
                    .first()
            )
            .then((character) => res.send(character))
            .catch(next)
    );
    app.post('/:id/:key', json(), (req, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', req.params.id)
            .first()
            .then((character) => character || Promise.reject('Not Found'))
            .then(({data}) => data && JSON.parse(data) || {})
            .then((data) => ({
                ...data,
                [req.params.key]: [
                    ...(data[req.params.key] || []),
                    req.body.value,
                ],
            }))
            .then(
                (data) => knex('characters')
                    .whereNull('deleted')
                    .where('id', req.params.id)
                    .update('data', JSON.stringify(data))
            )
            .then(
                () => knex('characters')
                    .whereNull('deleted')
                    .where('id', req.params.id)
                    .first()
            )
            .then((character) => res.send(character))
            .catch(next)
    );
    app.delete('/:id/:key1/:key2', json(), ({body, params}, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', params.id)
            .first()
            .then((character) => character || Promise.reject('Not Found'))
            .then(({data}) => data ? JSON.parse(data) : {})
            .then((data) => set(
                data,
                params.key1,
                reject(data[params.key1], (v, k) => k === +params.key2)
            ))
            .then(
                (data) => knex('characters')
                    .whereNull('deleted')
                    .where('id', params.id)
                    .update('data', JSON.stringify(data))
            )
            .then(
                () => knex('characters')
                    .whereNull('deleted')
                    .where('id', params.id)
                    .first()
            )
            .then((character) => res.send(character))
            .catch(next)
    );
    app.put('/:id/:key1/:key2/:key3', json(), ({body, params}, res, next) =>
        knex('characters')
            .whereNull('deleted')
            .where('id', params.id)
            .first()
            .then((character) => character || Promise.reject('Not Found'))
            .then(({data}) => data ? JSON.parse(data) : {})
            .then((data) => set(
                data,
                `${params.key1}.${params.key2}.${params.key3}`,
                body.value
            ))
            .then(
                (data) => knex('characters')
                    .whereNull('deleted')
                    .where('id', params.id)
                    .update('data', JSON.stringify(data))
            )
            .then(
                () => knex('characters')
                    .whereNull('deleted')
                    .where('id', params.id)
                    .first()
            )
            .then((character) => res.send(character))
            .catch(next)
    );
};
