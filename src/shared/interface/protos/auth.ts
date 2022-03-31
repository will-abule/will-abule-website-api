import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _auth_AuthServiceClient } from './auth/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  auth: {
    AuthRequest: MessageTypeDefinition
    AuthResponse: MessageTypeDefinition
    AuthService: SubtypeConstructor<typeof grpc.Client, _auth_AuthServiceClient> & { service: ServiceDefinition }
  }
}

