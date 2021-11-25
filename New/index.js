const express = require("express");

const path = require("path");

const routes = require('./routes/api/member')

const app = express();

const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','pug')

app.use(express.json())

// app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members', routes)

app.use('/articles',require('./routes/api/articles'))

/**
 * routes
 */



// app.get("/", (req, res) => {
//   // res.end("App is running");
//   res.render("index", { title: "This is the Title ", articles: articles })
// });





app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
