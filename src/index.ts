import dotenv from 'dotenv';
dotenv.config();
import { Server } from './Server';

const port = process.env.SERVER_PORT || String(7000);

const server = new Server({
  port,
});

server.execute();
