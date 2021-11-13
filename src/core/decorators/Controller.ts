export interface IControllerParams {
    path: string;
    middlewares: any[]
}

export function ControllerDecorator(target: any) {
    console.log(target);
}

export function Controller(params: IControllerParams): ClassDecorator {
    return ControllerDecorator;
}

// https://nehalist.io/routing-with-typescript-decorators/#instantiation