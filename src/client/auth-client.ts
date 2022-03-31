import {
  loadPackageDefinition,
  credentials,
  ServiceError,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { grpcProtoLoaderOptions } from "../shared/functions/grpc-proto-loader-options-function";
import { ProtoGrpcType } from "../shared/interface/protos/auth";
import { AuthRequest__Output } from "../shared/interface/protos/auth/AuthRequest";
import { AuthResponse } from "../shared/interface/protos/auth/AuthResponse";

const packageDefinition = loadSync(
  `${__dirname}/../shared/protos/auth.proto`,
  grpcProtoLoaderOptions
);
const proto = (loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.auth.AuthService(
  "localhost:50011",
  credentials.createInsecure()
);

export const clientRegister = (
  payload: AuthRequest__Output,
  callback: Function
) => {
  client.register(payload, (err?: ServiceError, res?: AuthResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};

export const clientLogin = (
  payload: AuthRequest__Output,
  callback: Function
) => {
  client.login(payload, (err?: ServiceError, res?: AuthResponse) => {
    if (err)
      callback({
        status: 500,
        errorMessage: err.message,
      });
    else callback(res);
  });
};
