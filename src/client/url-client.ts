import {
  loadPackageDefinition,
  credentials,
  ServiceError,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { grpcProtoLoaderOptions } from "../shared/functions/grpc-proto-loader-options-function";
import { ProtoGrpcType } from "../shared/interface/protos/url";
import { QueryInterface } from "../shared/interface/app/query-interface";
import { UrlResponse } from "../shared/interface/protos/url/UrlResponse";
import { UrlSingleRequest__Output } from "src/shared/interface/protos/url/UrlSingleRequest";
import { UrlSingleResponse } from "src/shared/interface/protos/url/UrlSingleResponse";
import { UrlAddRequest__Output } from "../shared/interface/protos/url/UrlAddRequest";
import { UrlUpdateRequest__Output } from "../shared/interface/protos/url/UrlUpdateRequest";
import { UrlDeleteRequest__Output } from "src/shared/interface/protos/url/UrlDeleteRequest";

const packageDefinition = loadSync(
  `${__dirname}/../shared/protos/url.proto`,
  grpcProtoLoaderOptions
);
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.url.UrlService(
  "http://localhost:50011",
  credentials.createInsecure()
);

export const clientGetUrls = (
  payload: QueryInterface,
  callback: Function
): UrlResponse | string | undefined => {
  let response: UrlResponse | string | undefined;

  client.getUrls(payload, (err?: ServiceError, res?: UrlResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });

  return response;
};

export const clientGetSingleUrl = (
  payload: UrlSingleRequest__Output,
  callback: Function
) => {
  client.getSingleUrl(
    payload,
    (err?: ServiceError, res?: UrlSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};

export const clientAddUrl = (
  payload: UrlAddRequest__Output,
  callback: Function
) => {
  client.addUrl(payload, (err?: ServiceError, res?: UrlSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientUpdateUrl = (
  payload: UrlUpdateRequest__Output,
  callback: Function
) => {
  client.updateUrl(payload, (err?: ServiceError, res?: UrlSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientDeleteUrl = (
  payload: UrlDeleteRequest__Output,
  callback: Function
) => {
  client.deleteUrl(payload, (err?: ServiceError, res?: UrlSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};
