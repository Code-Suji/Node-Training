const express = require('express')

const app = express()

const socket = require('socket.io')




const server = app.listen(4000, () => {
  console.log("Server listening to port 4000")
})

app.use(express.static('public'))
// Socket setup & pass server
var io =  socket(server);
io.on('connection', (socket) => {

  console.log(`made socket connection ${socket.id}`);
  
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  })


});