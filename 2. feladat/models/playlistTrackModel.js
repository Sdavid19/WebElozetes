const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Track = require("./trackModel")
const Playlist = require("./playlistModel")

const PlaylistTrack = sequelize.define("playlist_track", {
    PlaylistId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Playlist,
            key: "PlaylistId"
        }
    },
    TrackId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Track,
            key: "TrackId"
        }
    }
},
    { timestamps: false, freezeTableName: true});

module.exports = PlaylistTrack;