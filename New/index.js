const { json } = require("express");
const express = require("express");

const path = require("path");

const routes = require('./routes/api/member')

//Data source

const members = require(`./model/member`);

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members',routes)

/**
 * routes
 */

app.get("/", (req, res) => {
  res.end("App is running");
});


app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
