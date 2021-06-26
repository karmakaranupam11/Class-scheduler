const Sequelize = require("sequelize");

const db = new Sequelize("scheduler", "eventcalendar", "password", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {db}