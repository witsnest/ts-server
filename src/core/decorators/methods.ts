import { BaseController } from '../common';


function methodFactory(path: string, type: string): MethodDecorator {
    return (target: BaseController, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {

        console.log('Method ', descriptor.value, target);


        // In case the controller decorator is executed first, 
        // we need to register the rotues first for the controller
        let routes = Reflect.getMetadata('routes', target.constructor);
        if(!routes) {
            Reflect.defineMetadata('routes', [], target.constructor);
        }
        
        routes = Reflect.getMetadata('routes', target.constructor);
        routes.push({
            method: type,
            path: path,
            handler: descriptor.value
        });
        Reflect.defineMetadata('routes', routes, target);
    }
}

export function Get(path: string): MethodDecorator {
    return methodFactory(path, 'get');
}

export function Post(path: string): MethodDecorator {
    return methodFactory(path, 'post');
}

export function Put(path: string): MethodDecorator {
    return methodFactory(path, 'put');
}