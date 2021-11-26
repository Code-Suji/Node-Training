const express = require("express");

const path = require("path");

/**
 * importing route handlers
 */

const memberRoutes = require('./routes/api/member')

const articleRoutes = require('./routes/api/articles')

const app = express();

const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

/**
 * routes
 */


app.use('/api/members', memberRoutes)

app.use('/articles',articleRoutes)


/**
 * App is listening to port given
 */

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
