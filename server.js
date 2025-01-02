const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize the express app and the HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static files from the 'public' folder
app.use(express.static('public'));

// Listen for socket connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Listen for messages from the client
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);  // Broadcast the message to all connected clients
  });

  // Listen for disconnect events
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Set the port to listen on
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});