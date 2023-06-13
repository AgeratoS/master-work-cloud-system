import axios from "axios";
import { ICloudAdapter, ICloudParams, IMethod } from "../common";
import { Service } from "@prisma/client";

export default class Back4AppAdapter implements ICloudAdapter {
    async call(service: Service, params: ICloudParams) {
        if (params.method === IMethod.GET) {
            const getUrl = new URL('/classes/' + params.entityName, service.externalUrl);
            const result = await axios.get(getUrl.toString(), {
                headers: {
                    "X-Parse-Application-Id": service.appId,
                    "X-Parse-REST-API-Key": service.apiKey
                }
            });
            return result.data
        }

        else if (params.method === IMethod.CREATE) {
            const createUrl = new URL('/classes/' + params.entityName, service.externalUrl);
            const result = await axios.post(createUrl.toString(), params.addingParams, {
                headers: {
                    "X-Parse-Application-Id": service.appId,
                    "X-Parse-REST-API-Key": service.apiKey
                }
            });
            return result.data;
        }

        else if (params.method === IMethod.SET) {
            const updatingUrl = new URL('/classes/' + params.entityName + '/' + params.updatingParams.id, service.externalUrl);

            const result = await axios.put(updatingUrl.toString(), { ...params.updatingParams, id: undefined }, {
                headers: {
                    "X-Parse-Application-Id": service.appId,
                    "X-Parse-REST-API-Key": service.apiKey
                }
            });

            return result.data;
        }

        else if (params.method === IMethod.DELETE) {
            const deletingUrl = new URL('/classes/' + params.entityName + '/' + params.deletingParams.id, service.externalUrl);
            const result = await axios.delete(deletingUrl.toString(), {
                headers: {
                    "X-Parse-Application-Id": service.appId,
                    "X-Parse-REST-API-Key": service.apiKey
                }
            });

            return result.data;
        }
    }
}