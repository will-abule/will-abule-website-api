import { loadSync } from "@grpc/proto-loader";
import {
  loadPackageDefinition,
  sendUnaryData,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { grpcProtoLoaderOptions } from "../../../shared/functions/grpc-proto-loader-options-function";
import { generateAuthToken, User } from "../../schemas/user-schema";
import bcrypt from "bcrypt";
import { errorHandler } from "../../utils/functions/handler";
import { ProtoGrpcType } from "../../../shared/interface/protos/auth";
import { AuthRequest__Output } from "../../../shared/interface/protos/auth/AuthRequest";
import { AuthResponse } from "../../../shared/interface/protos/auth/AuthResponse";

const protoDefinition = loadSync(
  `${__dirname}/../../../shared/protos/auth.proto`,
  grpcProtoLoaderOptions
);
const authPackageDefinition = loadPackageDefinition(
  protoDefinition
) as unknown as ProtoGrpcType;

const register = async (
  call: ServerUnaryCall<AuthRequest__Output, AuthResponse>,
  callback: sendUnaryData<AuthResponse>
) => {
  try {
    const salt = await bcrypt.genSalt(10); // never change this

    const email = call.request.email.toLowerCase();
    const password = await bcrypt.hash(call.request.password, salt);

    let user = await User.findOne({ email });

    if (user)
      return callback(null, {
        status: 400,
        errorMessage: `This email: '${email}' has already been used by another user`,
      });

    user = new User({ email, password });

    await user.save();

    return callback(null, { status: 200, result: email });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const login = async (
  call: ServerUnaryCall<AuthRequest__Output, AuthResponse>,
  callback: sendUnaryData<AuthResponse>
) => {
  try {
    const email = call.request.email.toLowerCase();
    let user = await User.findOne({
      email,
    }).select("password");

    if (!user)
      return callback(null, {
        status: 400,
        errorMessage: "Invalid email!",
      });

    const validatePassword = await bcrypt.compare(
      call.request.password,
      user.password
    );
    if (!validatePassword)
      return callback(null, {
        status: 400,
        errorMessage: "Invalid password!",
      });

    return callback(null, {
      status: 200,
      result: email,
      token: generateAuthToken({ email }).token,
    });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

export { authPackageDefinition, register, login };
