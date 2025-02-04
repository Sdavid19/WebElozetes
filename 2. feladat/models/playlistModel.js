const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Playlist = sequelize.define("playlists", {
    PlaylistId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });


module.exports = Playlist;
