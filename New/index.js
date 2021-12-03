const express = require("express");

const path = require("path");

const session=require('express-session');

/**
 * importing route handlers
 */

const memberRoutes = require('./routes/api/member')

const articleRoutes = require('./routes/api/articles')

const userRoutes = require('./routes/api/user')

const PORT = process.env.PORT || 8000;

const app = express();


app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded())

app.use(session({
  name:'sid',
  saveUninitialized:false,
  resave:false,
  secret:'some long random string should come here',
  cookie:{
       maxAge:1000*60*60*2,
       sameSite:true,
       secure:process.env.NODE_ENV==='production'
       }
}))

app.use(express.static(path.join(__dirname, "public")));

/**
 * routes
 */


app.use('/api/members', memberRoutes)

app.use('/articles',articleRoutes)

app.use('/user', userRoutes)

/**
 * App is listening to port given
 */

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
