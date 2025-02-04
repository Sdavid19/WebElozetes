const mediaTypeController = require('../controllers/mediaTypeController');

const express = require("express");

const router = express.Router();

router.get("/manage", mediaTypeController.manageMediaTypes);
router.get("/select", mediaTypeController.getMediaTypes);
router.post("/insert", mediaTypeController.insertMediaTypes);
router.patch("/update/:id", mediaTypeController.updateMediaType);
router.delete("/delete/:id", mediaTypeController.deleteMediaType);

module.exports = router;