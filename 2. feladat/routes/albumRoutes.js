const albumController = require('../controllers/albumController');

const express = require("express");

const router = express.Router();

router.get("/manage", albumController.manageAlbums);
router.get("/select", albumController.getAlbums);
router.post("/insert", albumController.insertAlbums);
router.patch("/update/:id", albumController.updateAlbum);
router.delete("/delete/:id", albumController.deleteAlbum);

module.exports = router;