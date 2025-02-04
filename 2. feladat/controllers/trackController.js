const Track = require("../models/trackModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageTracks = async (req, res) => {
    manage(Track, 'tracksView', req, res);
}

const getTracks = async (req, res) => {
    get(Track, req, res);
}

const insertTracks = async (req, res) => {
    insert(Track, req, res);
}

const updateTrack = async (req, res) => {
    update(Track, req, res);
}

const deleteTrack = async (req, res) => {
    del(Track, req, res)
}

module.exports = {manageTracks, getTracks, insertTracks, updateTrack, deleteTrack};