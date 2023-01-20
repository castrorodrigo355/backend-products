import dotenv from 'dotenv';
dotenv.config();
import { Server } from './Server';

const port1 = process.env.SERVER_PORT || String(7000);

const server = new Server({
  port: port1,
});

server.execute();
