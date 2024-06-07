import { useEffect, useState } from 'react';

const WebSocketClient = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('ws://localhost:3000');
    setSocket(socket);

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('Connected to WebSocket server', event.timeStamp);
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      console.log('Message from server: ', event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    });

    socket.

    // Handle connection close
    socket.addEventListener('close', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Handle errors
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error: ', error);
    });

    // Clean up on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      socket.send(input);
      setInput('');
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

export default WebSocketClient;
