const InvoiceItem = require("../models/invoiceItemModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageInvoiceItems = async (req, res) => {
    manage(InvoiceItem, 'invoiceItemsView', req, res);
}

const getInvoiceItems = async (req, res) => {
    get(InvoiceItem, req, res);
}

const insertInvoiceItems = async (req, res) => {
    insert(InvoiceItem, req, res);
}

const updateInvoiceItem = async (req, res) => {
    update(InvoiceItem, req, res);
}

const deleteInvoiceItem = async (req, res) => {
    del(InvoiceItem, req, res)
}

module.exports = {manageInvoiceItems, getInvoiceItems, insertInvoiceItems, updateInvoiceItem, deleteInvoiceItem};