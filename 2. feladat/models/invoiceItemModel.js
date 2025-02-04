const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Invoice = require("./invoiceModel");

const InvoiceItem = sequelize.define("invoice_items", {
    InvoiceLineId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    InvoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Invoice,
            key: "InvoiceId"
        }
    },
    TrackId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UnitPrice: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, { timestamps: false });


module.exports = InvoiceItem;
