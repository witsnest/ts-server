import { BaseController, BaseMiddleware } from '../common';
import 'reflect-metadata';

export interface IControllerParams {
    path: string;
    middlewares: BaseMiddleware[];
}

export function createParentRoutes() {}

export function controllerFactory(target: any, params: IControllerParams) {
    Reflect.defineMetadata('parent', params, target);
    const routes = Reflect.getMetadata('routes', target);
    if(!routes) {
        Reflect.defineMetadata('routes', [], target);
    }
}

export function Controller(params: IControllerParams): ClassDecorator {
    return (target: BaseController) => {
        controllerFactory(target, params);
    }
}

export function Get(path: string): MethodDecorator {
    return (target: BaseController, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {

        // In case the controller decorator is executed first, 
        // we need to register the rotues first for the controller
        let routes = Reflect.getMetadata('routes', target.constructor);
        if(!routes) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        
        routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            method: 'get',
            path: path,
            handler: descriptor.value
        });
        Reflect.defineMetadata('routes', routes, target);
    }
}



// https://nehalist.io/routing-with-typescript-decorators/#instantiation