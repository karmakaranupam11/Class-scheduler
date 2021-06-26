const sequelize = require("sequelize");
const {db} = require("../db");

const EventDetails = db.define("eventdetails", {
    teacherName: {
        type: sequelize.STRING,
        allowNull: false
    },
    subjectName: {
        type: sequelize.STRING,
        allowNull: false
    },
    classDate: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    classStartTime: {
        type: sequelize.TIME,
        allowNull: false
    },
    classEndTime: {
        type: sequelize.TIME,
        allowNull: false
    }
});

(async () => {
    await db.sync();
    console.log("db synced successfully");
})().catch((err) => {
    console.log("DB syncronisation unsuccessful");
})

module.exports = {EventDetails}