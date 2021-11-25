const express =require('express')

const articles = require('../../model/articles')

const router = express.Router()

.get("/", (req, res) => {
  console.log(`Inside Get Articles ...`);
  let result = articles.getAll()
  res.render("index", { title: "This is the Title ", articles: result });
});

router.get("/add", (req, res) => {
  // res.end("App is running");
  res.render("add_article", { title:"Add view"})
});

router.get('/saveForm', (req, res) => {
  res.send(req.query)
})

module.exports = router