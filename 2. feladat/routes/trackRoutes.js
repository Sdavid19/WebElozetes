const trackController = require('../controllers/trackController');

const express = require("express");

const router = express.Router();

router.get("/manage", trackController.manageTracks);
router.get("/select", trackController.getTracks);
router.post("/insert", trackController.insertTracks);
router.patch("/update/:id", trackController.updateTrack);
router.delete("/delete/:id", trackController.deleteTrack);

module.exports = router;