const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Genre = require("./genreModel");
const MediaType = require("./mediaTypeModel");
const Album = require("./albumModel");


const Track = sequelize.define("tracks", {
    TrackId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AlbumId: {
        type: DataTypes.INTEGER,
        references: {
            model: Album,
            key: "AlbumId"
        }
    },
    MediaTypeId: {
        type: DataTypes.INTEGER,
        references: {
            model: MediaType,
            key: "MediaTypeId"
        }
    },
    GenreId: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: "GenreId"
        }
    },
    Composer: {
        type: DataTypes.STRING
    },
    Milliseconds: {
        type: DataTypes.INTEGER
    },
    Bytes: {
        type: DataTypes.INTEGER
    },
    UnitPrice: {
        type: DataTypes.NUMBER
    }
}, { timestamps: false });

Track.belongsTo(Genre, {foreignKey: "GenreId"});

Track.belongsTo(MediaType, {foreignKey: "MediaTypeId"});

Track.belongsTo(Album, {foreignKey: "AlbumId"})

module.exports = Track;
