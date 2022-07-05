import { BaseController, Controller, Get } from '../../core';

@Controller({
    path: '/login',
    middlewares: []
})
export class LoginController extends BaseController {
    constructor() {
        super();
    }

    @Get('/')
    async login() {}
}