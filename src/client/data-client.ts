import {
  loadPackageDefinition,
  credentials,
  ServiceError,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { grpcProtoLoaderOptions } from "../shared/functions/grpc-proto-loader-options-function";
import { ProtoGrpcType } from "../shared/interface/protos/data";
import { QueryInterface } from "../shared/interface/app/query-interface";
import { DataResponse } from "../shared/interface/protos/data/DataResponse";
import { DataSingleRequest__Output } from "src/shared/interface/protos/data/DataSingleRequest";
import { DataSingleResponse } from "src/shared/interface/protos/data/DataSingleResponse";
import { DataAddRequest } from "../shared/interface/protos/data/DataAddRequest";
import { DataUpdateRequest } from "../shared/interface/protos/data/DataUpdateRequest";
import { DataDeleteRequest__Output } from "src/shared/interface/protos/data/DataDeleteRequest";

const packageDefinition = loadSync(
  `${__dirname}/../shared/protos/data.proto`,
  grpcProtoLoaderOptions
);
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.data.DataService(
  "http://localhost:50011",
  credentials.createInsecure()
);

export const clientGetAllData = (
  payload: QueryInterface,
  callback: Function
) => {
  client.getAllData(payload, (err?: ServiceError, res?: DataResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientGetSingleData = (
  payload: DataSingleRequest__Output,
  callback: Function
) => {
  client.getSingleData(
    payload,
    (err?: ServiceError, res?: DataSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};

export const clientAddData = (payload: DataAddRequest, callback: Function) => {
  client.addData(payload, (err?: ServiceError, res?: DataSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientUpdateData = (
  payload: DataUpdateRequest,
  callback: Function
) => {
  client.updateData(payload, (err?: ServiceError, res?: DataSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientDeleteData = (
  payload: DataDeleteRequest__Output,
  callback: Function
) => {
  client.deleteData(payload, (err?: ServiceError, res?: DataSingleResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};
