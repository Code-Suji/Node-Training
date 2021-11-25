const articles = require(`../public/articles.json`);
const fs = require("fs");
const uuid = require("uuid");

let Articles = {};

Articles.getAll = () => {
  return articles;
};

module.exports = Articles