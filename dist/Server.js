"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    // Instanciar la clase con el constructor
    constructor({ port }) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.configMiddlewares();
        this.configRoutes();
    }
    configMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    configRoutes() {
        this.app.get('/users', (req, res) => {
            res.json({ data: 'Bienvenido' });
        });
    }
    execute() {
        this.app.listen(this.port, () => {
            console.log(`Server running port: ${this.port}`);
        });
    }
}
exports.Server = Server;
