const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');
const  Artist  = require("./artistModel")

const Album = sequelize.define("albums", {
    AlbumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Title: {
        type: DataTypes.STRING(160),
        allowNull: false
    },
    ArtistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Artist,
            key: "ArtistId"
        }
    }
}, { timestamps: false });

Album.belongsTo(Artist, { foreignKey: "ArtistId" })
module.exports = Album;