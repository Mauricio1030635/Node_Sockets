import { SEVER_PORT } from '../global/environment';
import express from 'express';

export default class Server {

    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = SEVER_PORT;
    }

    start(callback:any) {
        this.app.listen( this.port, callback );
    }

}