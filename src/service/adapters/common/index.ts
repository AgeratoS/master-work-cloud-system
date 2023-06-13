import { Service } from "@prisma/client";

export enum IMethod {
    GET = 'GET', SET = 'SET', DELETE = 'DELETE', CREATE = 'CREATE'
}

export interface ICloudParams {
    entityName: string;
    method: IMethod;
    addingParams?: Record<string, string>;
    updatingParams?: Record<string, string>;
    deletingParams?: Record<string, string>;
}

export interface ICloudAdapter {
    call(service: Service, params: ICloudParams): Promise<any>;
}