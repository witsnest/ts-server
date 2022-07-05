import { BaseController, Controller } from '../../core';


@Controller({
    path: '/user',
    middlewares: []
})
export class UserController extends BaseController {
    constructor() {
        super();
    }
}