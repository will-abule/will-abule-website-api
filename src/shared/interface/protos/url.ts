import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UrlServiceClient as _url_UrlServiceClient } from './url/UrlService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  queryParams: {
    QueryParamsRequest: MessageTypeDefinition
  }
  url: {
    Data: MessageTypeDefinition
    UrlAddRequest: MessageTypeDefinition
    UrlDeleteRequest: MessageTypeDefinition
    UrlResponse: MessageTypeDefinition
    UrlService: SubtypeConstructor<typeof grpc.Client, _url_UrlServiceClient> & { service: ServiceDefinition }
    UrlSingleRequest: MessageTypeDefinition
    UrlSingleResponse: MessageTypeDefinition
    UrlUpdateRequest: MessageTypeDefinition
  }
}

