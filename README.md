# DEVELOP-A-REAL-TIME-CHAT-APPLICATION-USING-WEBSOCKET-OR-SOCKET.IO.

**COMPANY**: CODETECH IT SOLUTIONS

**NAME**: VAISHNAVI PRAKASH ZANZANE

**INTERN ID**: CT08GFF

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**BATCH DURATION**: DECEMBER 25th, 2024 to JANUARY 25th, 2025

**MENTOR NAME**: NEELA SANTOSH

# DESCRIPTION OF TASK 
Prerequisites: Node.js (installed) npm (Node Package Manager) Basic knowledge of JavaScript, HTML, CSS, and Node.js 
Step 1: Initialize the Project 
1.Create the project folder and initialize the Node.js project. 
2.Install necessary dependencies: Express (web server framework) Socket.IO (for real-time communication) 
Step 2: Set Up the Backend (Server-Side) 
1.Create a new file for your server, e.g., server.js 
2.Set up the basic server using Express and Socket.IO Explanation: express.static('public') serves static files from the "public" folder, which will hold our frontend. We initialize Socket.IO and listen for messages from the clients. When a message is received, it's broadcasted to all connected clients. 
Step 3: Set Up the Frontend (Client-Side) 
1.Create the 'public' folder to hold the frontend files 
2.Create the index.html file inside the public folder 
3.Add the following HTML to the index.html file Explanation: The page contains a simple chat interface with a list (ul) for displaying messages and an input box for typing messages. The socket.io.js script is included to establish a WebSocket connection. When the user clicks the "Send" button or presses Enter, the message is emitted to the server using socket.emit('chat message', message). The socket.on('chat message') listens for incoming messages and displays them in the messages list. 
Step 4: Run the Application 
1.Start the server 
2.Access the chat application: Open your browser and go to http://localhost:3000. 
Step 5: Test the Application Open multiple tabs or different browsers to test real-time communication. Type a message in one tab and press "Send". You should see the message appear in all other tabs in real-time. With the steps above, you have created a simple real-time chat application using Socket.IO. The server listens for chat messages and broadcasts them to all connected clients, while the frontend handles the user interface. You can expand this project with additional features, such as user authentication, message persistence, and advanced chat functionalities. 

# OUTPUT OF THE TASK
