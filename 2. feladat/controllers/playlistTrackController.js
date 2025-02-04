const PlaylistTrack = require("../models/playlistTrackModel");
const { get, del, insert, update, manage } = require("./mainController");

const managePlaylistTracks = async (req, res) => {
    manage(PlaylistTrack, 'playlistTracksView', req, res);
}

const getPlaylistTracks = async (req, res) => {
    get(PlaylistTrack, req, res);
}

const insertPlaylistTracks = async (req, res) => {
    insert(PlaylistTrack, req, res);
}

const updatePlaylistTrack = async (req, res) => {
    update(PlaylistTrack, req, res);
}

const deletePlaylistTrack = async (req, res) => {
    del(PlaylistTrack, req, res)
}

module.exports = {managePlaylistTracks, getPlaylistTracks, insertPlaylistTracks, updatePlaylistTrack, deletePlaylistTrack};