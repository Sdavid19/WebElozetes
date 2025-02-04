const Employee = require("../models/employeeModel");
const { get, del, insert, update, manage } = require("./mainController");

const manageEmployees = async (req, res) => {
    manage(Employee, 'employeesView', req, res);
}

const getEmployees = async (req, res) => {
    get(Employee, req, res);
}

const insertEmployees = async (req, res) => {
    insert(Employee, req, res);
}

const updateEmployee = async (req, res) => {
    update(Employee, req, res);
}

const deleteEmployee = async (req, res) => {
    del(Employee, req, res)
}

module.exports = {manageEmployees, getEmployees, insertEmployees, updateEmployee, deleteEmployee};