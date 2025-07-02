import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send({Message: 'Welcome to Movie recommender API...'});
})

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
})