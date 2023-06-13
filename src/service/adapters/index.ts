import { Injectable } from "@nestjs/common";
import Back4AppAdapter from "./back4app";
import { ICloudAdapter } from "./common";
import { NoImplementationAdapter } from "./noImplementation";

@Injectable()
export class CloudFactory {
    getInstance(type: string): ICloudAdapter {
        if (type === 'BACK4APP') {
            return new Back4AppAdapter();
        }

        else return new NoImplementationAdapter();
    }
}