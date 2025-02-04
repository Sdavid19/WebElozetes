const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Artist = sequelize.define("artists", {
    ArtistId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(120),
        allowNull: false
    }
}, { timestamps: false });

module.exports = Artist;