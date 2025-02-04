const genresController = require('../controllers/genresController');

const express = require("express");

const router = express.Router();

router.get("/manage", genresController.manageGenres);
router.get("/select", genresController.getGenres);
router.post("/insert", genresController.insertGenres);
router.patch("/update/:id", genresController.updateGenre);
router.delete("/delete/:id", genresController.deleteGenre);

module.exports = router;