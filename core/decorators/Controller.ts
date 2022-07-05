import 'reflect-metadata';
import { BaseController, BaseMiddleware } from '../common';

export interface IControllerParams {
    path: string;
    middlewares: BaseMiddleware[];
}

function createParentRoutes() {}

function controllerFactory<T extends BaseController>(target: T, params: IControllerParams) {
    Reflect.defineMetadata('parent', params, target);
    const routes = Reflect.getMetadata('routes', target);
    if(!routes) {
        Reflect.defineMetadata('routes', [], target);
    }
}

export function Controller(params: IControllerParams): ClassDecorator {
    return <T extends BaseController>(target: T) => {
        console.log('Controller ', target);
        controllerFactory(target, params);
    }
}


// https://nehalist.io/routing-with-typescript-decorators/#instantiation