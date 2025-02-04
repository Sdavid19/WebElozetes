const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Genre = sequelize.define("genres", {
    GenreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING
    }
}, { timestamps: false });


module.exports = Genre;
