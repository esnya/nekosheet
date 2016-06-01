# Nekosheet
[![Build Status](https://img.shields.io/travis/ukatama/nekosheet/master.svg?style=flat-square)](https://travis-ci.org/ukatama/nekosheet)
[![Coverage Status](https://img.shields.io/coveralls/ukatama/nekosheet.svg?style=flat-square)](https://coveralls.io/github/ukatama/nekosheet)
[![PeerDependencies](https://img.shields.io/david/peer/ukatama/nekosheet.svg?style=flat-square)](https://david-dm.org/ukatama/nekosheet#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/ukatama/nekosheet.svg?style=flat-square)](https://david-dm.org/ukatama/nekosheet)
[![DevDependencies](https://img.shields.io/david/dev/ukatama/nekosheet.svg?style=flat-square)](https://david-dm.org/ukatama/nekosheet#info=devDependencies&view=list)

Online character sheet.

## Supported sheet types
- Sowrd World 2.0 (Japanese)

## Features
- Auto field calculation
- Correct values from terms in text
  - e.g. `[Int+1]`

## Requirements
- Node.js 5.x
- SQL Database
  - SQLite3
  - MySQL
- Redis Server
- Authenticate Proxy (or guest mode)
  - [Nekoproxy](https://github.com/ukatama/nekoproxy.git)
  - or any one based Passport.js

## As a Docker container
### Build
```
$ git clone --recursive https://github.com/ukatama/nekosheet.git
$ docker build -t ukatama/nekosheet nekosheet
```

### Config
```
$ vi /path/to/nekosheet/config.json
$ cat /path/to/nekosheet/config.json
{
    "redis": {
      "host": "redis"
    },
    "session": {
      "secret": "<SECRET>",
      "store": "redis"
    }
}
```

### Run
```
$ docker run -d --name redis redis
$ docker run -d --name nekosheet \
    --link redis:redis \
    -v /path/to/nekosheet/data:/usr/src/app/tmp \
    -v /path/to/nekosheet/config.json:/usr/src/app/config/local.json:ro \
    --env NODE_ENV=production \
    ukatama/nekosheet
```

## As a Node.ja application
### Build
```
$ git clone --recursive https://github.com/ukatama/nekosheet.git
$ cd nekosheet
$ npm install
$ npm run production
```

### Run
```
$ NODE_ENV=production npm start
```

## Configuration
See `config/default.yml` and `config/production.yml`.
