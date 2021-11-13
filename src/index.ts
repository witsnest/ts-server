import * as http from 'http';
import { Application } from './core/Application';
import { Controller } from './core/decorators/Controller';


@Controller({
    path: '/login',
    middlewares: []
})
class LoginController {
    constructor() {

    }
}

const app = new Application();
app.start(3000);

console.log(Application);