const MediaType = require("../models/mediaTypeModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageMediaTypes = async (req, res) => {
    manage(MediaType, 'mediaTypesView', req, res);
}

const getMediaTypes = async (req, res) => {
    get(MediaType, req, res);
}

const insertMediaTypes = async (req, res) => {
    insert(MediaType, req, res);
}

const updateMediaType = async (req, res) => {
    update(MediaType, req, res);
}

const deleteMediaType = async (req, res) => {
    del(MediaType, req, res)
}

module.exports = {manageMediaTypes, getMediaTypes, insertMediaTypes, updateMediaType, deleteMediaType};