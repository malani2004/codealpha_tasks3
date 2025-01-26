// frontend/websocket.js
const socket = new WebSocket('ws://127.0.0.1:8000/ws/game/');

socket.onopen = () => {
    console.log('WebSocket connection established');
    socket.send(JSON.stringify({ message: 'Hello, Server!' }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Message from server:', data.message);
};

socket.onclose = () => {
    console.log('WebSocket connection closed');
};
