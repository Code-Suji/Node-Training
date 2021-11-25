
/**
 * importing the data file required
 */
const articles = require(`../public/articles.json`);

let Articles = {};

/**
 * list all articles from data file
 * @returns articles data
 */

Articles.getAll = () => {
  return articles;
};

module.exports = Articles
