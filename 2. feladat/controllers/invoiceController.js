const Invoice = require("../models/invoiceModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageInvoices = async (req, res) => {
    manage(Invoice, 'invoicesView', req, res);
}

const getInvoices = async (req, res) => {
    get(Invoice, req, res);
}

const insertInvoices = async (req, res) => {
    insert(Invoice, req, res);
}

const updateInvoice = async (req, res) => {
    update(Invoice, req, res);
}

const deleteInvoice = async (req, res) => {
    del(Invoice, req, res)
}

module.exports = {manageInvoices, getInvoices, insertInvoices, updateInvoice, deleteInvoice};