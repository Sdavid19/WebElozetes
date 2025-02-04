const Customer = require("../models/customerModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageCustomers = async (req, res) => {
    manage(Customer, 'customersView', req, res);
}

const getCustomers = async (req, res) => {
    get(Customer, req, res);
}

const insertCustomers = async (req, res) => {
    insert(Customer, req, res);
}

const updateCustomer = async (req, res) => {
    update(Customer, req, res);
}

const deleteCustomer = async (req, res) => {
    del(Customer, req, res)
}

module.exports = {manageCustomers, getCustomers, insertCustomers, updateCustomer, deleteCustomer};