const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
module.exports = {
    "type": "mysql",
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "123qwe",
    "database": "ng-nest",
    "entities": [`${SOURCE_PATH}/**/**.entity{.ts,.js}`],
    "synchronize": true,
    "logging": [
        "query",
        "error"
    ]
};