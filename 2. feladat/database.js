const sqlite3 = require('sqlite3').verbose();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    "chinook",
    process.env.USER,
    process.env.PASSWORD,
    {
      host: "0.0.0.0",
      dialect: "sqlite",
      storage: "./data/chinook.db"
    }
  );

module.exports = { sequelize, DataTypes};