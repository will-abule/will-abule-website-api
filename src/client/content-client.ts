import {
  loadPackageDefinition,
  credentials,
  ServiceError,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { grpcProtoLoaderOptions } from "../shared/functions/grpc-proto-loader-options-function";
import { ProtoGrpcType } from "../shared/interface/protos/content";
import { QueryInterface } from "../shared/interface/app/query-interface";
import { ContentResponse } from "../shared/interface/protos/content/ContentResponse";
import { ContentSingleRequest__Output } from "src/shared/interface/protos/content/ContentSingleRequest";
import { ContentSingleResponse } from "src/shared/interface/protos/content/ContentSingleResponse";
import { ContentAddRequest } from "../shared/interface/protos/content/ContentAddRequest";
import { ContentUpdateRequest } from "../shared/interface/protos/content/ContentUpdateRequest";
import { ContentDeleteRequest__Output } from "src/shared/interface/protos/content/ContentDeleteRequest";

const packageDefinition = loadSync(
  `${__dirname}/../shared/protos/content.proto`,
  grpcProtoLoaderOptions
);
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.content.ContentService(
  "http://localhost:50011",
  credentials.createInsecure()
);

export const clientGetContents = (
  payload: QueryInterface,
  callback: Function
) => {
  client.getContents(payload, (err?: ServiceError, res?: ContentResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientGetSingleContent = (
  payload: ContentSingleRequest__Output,
  callback: Function
) => {
  client.getSingleContent(
    payload,
    (err?: ServiceError, res?: ContentSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};

export const clientAddContent = (
  payload: ContentAddRequest,
  callback: Function
) => {
  client.addContent(
    payload,
    (err?: ServiceError, res?: ContentSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};

export const clientUpdateContent = (
  payload: ContentUpdateRequest,
  callback: Function
) => {
  client.updateContent(
    payload,
    (err?: ServiceError, res?: ContentSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};

export const clientDeleteContent = (
  payload: ContentDeleteRequest__Output,
  callback: Function
) => {
  client.deleteContent(
    payload,
    (err?: ServiceError, res?: ContentSingleResponse) => {
      if (err)
        callback({
          status: 500,
          errorMessage: err.message,
        });
      else callback(res);
    }
  );
};
