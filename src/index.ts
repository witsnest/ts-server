import { Application, bootstrap } from './core';
import { LoginController } from './demo/login';


@bootstrap({
    routes: [
        LoginController
    ]
})
class App {}


const app = new Application();
app.start(3000);

console.log(Application);