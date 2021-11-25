import * as http from 'http';
import { Application, Controller, Get } from './core';
import { BaseController } from './core/common';


@Controller({
    path: '/login',
    middlewares: []
})
class LoginController extends BaseController {
    constructor() {
        super();
    }

    @Get('/')
    async login() {}
}

@Controller({
    path: '/user',
    middlewares: []
})
class UserController extends BaseController {
    constructor() {
        super();
    }
}

const app = new Application();
app.start(3000);

console.log(Application);