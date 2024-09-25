const Sequelize = require('sequelize');

const database = new Sequelize('react', 'teste', 'Matheus', {
    dialect: 'mssql', host: 'localhost', port: 49928
});

database.sync();

module.exports = database;