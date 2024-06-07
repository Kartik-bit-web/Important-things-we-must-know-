// src/WebSocketClient.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [disconnected, setdisconnected] = useState('connect')
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create a socket connection
    const socket = io('http://127.0.0.1:3000');
    setSocket(socket);

    // Listen for messages from the server
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('message', (message) => {
      let clientOffset = socket.id
      console.log(clientOffset)
      console.log('Message from server:', message, clientOffset);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      socket.emit('message', input);
      setInput('');
    }
  };

  const disconnect = () => {
    if (socket && disconnected) {
      if(socket.connected){
        socket.disconnect();
        setdisconnected('disconnect')
      }else{
        socket.connect();
        setdisconnected('connect');
      }
      
      
    }
  };

  return (
    <div>
      <h1>WebSocket Client</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={disconnect}>{disconnected}</button>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
