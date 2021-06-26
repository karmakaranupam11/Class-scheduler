const route = require("express").Router();

const {insertEvent} = require("../controllers/event-details");

route.post("/", async (req, res) => {
    const result = await insertEvent(req.body);
    if(result) {
        res.status(201).json({
            status: "success",
            data: result
        });
    }
    else {
        res.status(500).json({
            status: "error"
        });
    }
});

module.exports = {route}