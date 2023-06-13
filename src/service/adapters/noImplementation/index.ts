import { NotImplementedException } from "@nestjs/common";
import { ICloudAdapter, ICloudParams } from "../common";
import { Service } from "@prisma/client";

export class NoImplementationAdapter implements ICloudAdapter {
    call(service: Service, params: ICloudParams): Promise<any> {
        throw new NotImplementedException("There is no such configuration")
    }
}