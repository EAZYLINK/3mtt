import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const PORT = 8000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('chat message', (msg) => {
        console.log(msg)
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`)
    })
})
app.get('/', (req, res) => {
    res.send('Welcome to CHATAPP...')
})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})