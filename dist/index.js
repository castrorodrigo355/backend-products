"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Server_1 = require("./Server");
const port = process.env.SERVER_PORT || String(7000);
const server = new Server_1.Server({
    port,
});
server.execute();
