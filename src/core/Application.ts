import { createServer, IncomingMessage, RequestListener, Server, ServerResponse } from 'http';

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

    }

}
