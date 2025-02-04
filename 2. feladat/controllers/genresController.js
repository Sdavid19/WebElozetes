const Genre = require("../models/genreModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageGenres = async (req, res) => {
    manage(Genre, 'genresView', req, res);
}

const getGenres = async (req, res) => {
    get(Genre, req, res);
}

const insertGenres = async (req, res) => {
    insert(Genre, req, res);
}

const updateGenre = async (req, res) => {
    update(Genre, req, res);
}

const deleteGenre = async (req, res) => {
    del(Genre, req, res)
}

module.exports = {manageGenres, getGenres, insertGenres, updateGenre, deleteGenre};