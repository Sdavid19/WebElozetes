const Album = require("../models/albumModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageAlbums = async (req, res) => {
    manage(Album, 'AlbumsView', req, res);
}

const getAlbums = async (req, res) => {
    get(Album, req, res);
}

const insertAlbums = async (req, res) => {
    insert(Album, req, res);
}

const updateAlbum = async (req, res) => {
    update(Album, req, res);
}

const deleteAlbum = async (req, res) => {
    del(Album, req, res)
}

module.exports = {manageAlbums, getAlbums, insertAlbums, updateAlbum, deleteAlbum};