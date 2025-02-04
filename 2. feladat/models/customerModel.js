const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');
const Employee  = require("./employeeModel")

const Customer = sequelize.define("customers", {
    CustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    LastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    FirstName: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    Company: {
        type: DataTypes.STRING(80)
    },
    Address: {
        type: DataTypes.STRING(70)
    },
    City: {
        type: DataTypes.STRING(40)
    },
    State: {
        type: DataTypes.STRING(40)
    },
    Country: {
        type: DataTypes.STRING(40)
    },
    PostalCode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(24)
    },
    Fax: {
        type: DataTypes.STRING(24)
    },
    Email: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    SupportRepId: {
        type: DataTypes.INTEGER,
        references: {
            model: Employee,
            key: 'EmployeeId'
        }
    },

}, { timestamps: false });


module.exports = Customer;
