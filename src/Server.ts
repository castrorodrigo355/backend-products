import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

interface Props {
  port: string;
}

export class Server {
  // Atributos de clase
  port: string;
  app: Application;

  // Instanciar la clase con el constructor
  constructor({ port }: Props) {
    this.port = port;
    this.app = express();
    this.configMiddlewares();
    this.configRoutes();
  }

  private configMiddlewares(): void {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private configRoutes(): void {
    this.app.get('/users', (req, res) => {
      res.json({ data: 'Bienvenido' });
    });
  }

  execute(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running port: ${this.port}`);
    });
  }
}
