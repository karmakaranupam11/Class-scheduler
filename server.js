const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const {db} = require("./db");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',express.static(__dirname + "/public"));

app.use("/api/add", require("./routes/insert-data").route);
app.use("/api/get", require("./routes/retrive-data").route);

app.listen(PORT,() =>{
    console.log('listening at port', PORT);
});