const Sequelize = require("sequelize");

const {EventDetails} = require("../models/event-details");

const insertEvent = async (eventData) => {
    return await EventDetails.create({
        teacherName: eventData.teacherName,
        subjectName: eventData.subjectName,
        classDate: eventData.classDate,
        classStartTime: eventData.classStartTime,
        classEndTime: eventData.classEndTime
    }).then((insertedData) => {
        console.log("event data added to DB : ", insertedData);
        return insertedData;
    }).catch((err) => {
        console.log("error in inserting data into DB : ", err)
        return;
    })
}

const getEventData = async (dateValue) => {
    return await EventDetails.findAll({
        where: {
            classDate: dateValue
        }
    }).then((retrivedData) => {
        console.log("data retrived successfully : ", retrivedData);
        return retrivedData;
    }).catch((err) => {
        console.log("error retiving data from DB : ", err);
        return;
    })
}

module.exports = {
    insertEvent,
    getEventData
}