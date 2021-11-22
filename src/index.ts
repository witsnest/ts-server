import * as http from 'http';
import { Controller, Get } from './core';
import { Application } from './core/application';
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