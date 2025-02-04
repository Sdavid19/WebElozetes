const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Customer = require("./customerModel");

const Invoice = sequelize.define("invoices", {
    InvoiceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    CustomerId: {
        type: DataTypes.INTEGER,
        references: {
            model: Customer,
            key: "CustomerId"
        }
    },
    InvoiceDate: {
        type: DataTypes.DATE
    },
    BillingAddress: {
        type: DataTypes.STRING
    },
    BillingCity: {
        type: DataTypes.STRING
    },
    BillingState: {
        type: DataTypes.STRING
    },
    BillingCountry: {
        type: DataTypes.STRING
    },
    BillingPostalCode: {
        type: DataTypes.STRING
    },
    Total: {
        type: DataTypes.NUMBER
    }
}, { timestamps: false });


module.exports = Invoice;
