import { Application, Bootstrap } from './core';
import { LoginController } from './demo/login';


@Bootstrap({
    routes: [
        LoginController
    ]
})
class App {}


const app = new Application();
app.start(3000);

console.log(Application);