const Playlist = require("../models/playlistModel");
const { get, del, insert, update, manage } = require("./mainController");

const managePlaylists = async (req, res) => {
    manage(Playlist, 'playlistsView', req, res);
}

const getPlaylists = async (req, res) => {
    get(Playlist, req, res);
}

const insertPlaylists = async (req, res) => {
    insert(Playlist, req, res);
}

const updatePlaylist = async (req, res) => {
    update(Playlist, req, res);
}

const deletePlaylist = async (req, res) => {
    del(Playlist, req, res)
}

module.exports = {managePlaylists, getPlaylists, insertPlaylists, updatePlaylist, deletePlaylist};