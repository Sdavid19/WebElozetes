const playlistController = require('../controllers/playlistController');

const express = require("express");

const router = express.Router();

router.get("/manage", playlistController.managePlaylists);
router.get("/select", playlistController.getPlaylists);
router.post("/insert", playlistController.insertPlaylists);
router.patch("/update/:id", playlistController.updatePlaylist);
router.delete("/delete/:id", playlistController.deletePlaylist);

module.exports = router;