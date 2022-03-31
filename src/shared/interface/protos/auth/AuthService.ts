// Original file: src/shared/protos/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { AuthRequest as _auth_AuthRequest, AuthRequest__Output as _auth_AuthRequest__Output } from '../auth/AuthRequest';
import type { AuthResponse as _auth_AuthResponse, AuthResponse__Output as _auth_AuthResponse__Output } from '../auth/AuthResponse';

export interface AuthServiceClient extends grpc.Client {
  Login(argument: _auth_AuthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _auth_AuthRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _auth_AuthRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Login(argument: _auth_AuthRequest, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _auth_AuthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _auth_AuthRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _auth_AuthRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  login(argument: _auth_AuthRequest, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  
  Register(argument: _auth_AuthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Register(argument: _auth_AuthRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Register(argument: _auth_AuthRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  Register(argument: _auth_AuthRequest, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  register(argument: _auth_AuthRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  register(argument: _auth_AuthRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  register(argument: _auth_AuthRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  register(argument: _auth_AuthRequest, callback: (error?: grpc.ServiceError, result?: _auth_AuthResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_auth_AuthRequest__Output, _auth_AuthResponse>;
  
  Register: grpc.handleUnaryCall<_auth_AuthRequest__Output, _auth_AuthResponse>;
  
}
