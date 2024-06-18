const { Sequelize } = require('sequelize');

// Configuration de la base de données SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;
