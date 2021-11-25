import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

export class Application {

    private server: Server;

    constructor() {
        this.server = createServer(this.listenRoutes);
    }

    // Public methods
    start(port: number) {
        this.server.listen(port);
    }
    
    stop() {
        this.server.close();
    }

    // Private methods
    private listenRoutes(req: IncomingMessage, res: ServerResponse) {

        console.log(Reflect);

        res.end('Hello world!');
    }

}
