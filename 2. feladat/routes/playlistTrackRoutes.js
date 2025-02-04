const playlistTrackController = require('../controllers/playlistTrackController');

const express = require("express");

const router = express.Router();

router.get("/select", playlistTrackController.getPlaylistTracks);
router.post("/insert", playlistTrackController.insertPlaylistTracks);
router.patch("/update/:id", playlistTrackController.updatePlaylistTrack);
router.delete("/delete/:id", playlistTrackController.deletePlaylistTrack);

module.exports = router;