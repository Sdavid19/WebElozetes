const artistController = require('../controllers/artistController');

const express = require("express");

const router = express.Router();

router.get("/manage", artistController.manageArtists);
router.get("/select", artistController.getArtists);
router.post("/insert", artistController.insertArtists);
router.patch("/update/:id", artistController.updateArtist);
router.delete("/delete/:id", artistController.deleteArtist);

module.exports = router;