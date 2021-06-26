const route = require("express").Router();

const {getEventData} = require("../controllers/event-details");

route.get("/:dateValue", async (req, res) => {
    const result = await getEventData(req.params.dateValue);
    if(result.length) {
        res.status(200).json({
            status: "found",
            data: result
        });
    }
    else {
        res.status(200).json({
            status: "no data found",
        });
    }
});

module.exports = {route}