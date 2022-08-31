import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import battleRouter from './routers/battleRouter.js'

dotenv.config();

const PORT = process.env.PORT;

const server = express();
server.use(cors());
server.use(express.json());

server.use(battleRouter);


server.listen(PORT, () => {
    console.log(`Ao vivo e a cores -> ${PORT}`);
})