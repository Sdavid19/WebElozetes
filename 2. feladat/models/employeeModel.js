const { sequelize } = require("../database");
const  { DataTypes }  = require('sequelize');

const Employee = sequelize.define("employees", {
    EmployeeId: {
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
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING(30)
    },
    ReportsTo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'employees',
            key: 'EmployeeId'
        }
    },
    BirthDate: {
        type: DataTypes.DATE
    },
    HireDate: {
        type: DataTypes.DATE
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
        type: DataTypes.STRING(10)
    },
    Phone: {
        type: DataTypes.STRING(24)
    },
    Fax: {
        type: DataTypes.STRING(24)
    },
    Email: {
        type: DataTypes.STRING(60)
    },
}, { timestamps: false });


module.exports = Employee;