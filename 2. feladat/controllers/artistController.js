const Artist = require("../models/artistModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageArtists = async (req, res) => {
    manage(Artist, 'ArtistsView', req, res);
}

const getArtists = async (req, res) => {
    get(Artist, req, res);
}

const insertArtists = async (req, res) => {
    insert(Artist, req, res);
}

const updateArtist = async (req, res) => {
    update(Artist, req, res);
}

const deleteArtist = async (req, res) => {
    del(Artist, req, res)
}

module.exports = {manageArtists, getArtists, insertArtists, updateArtist, deleteArtist};