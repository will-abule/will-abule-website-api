import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ContentServiceClient as _content_ContentServiceClient } from './content/ContentService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  content: {
    Content: MessageTypeDefinition
    ContentAddRequest: MessageTypeDefinition
    ContentDeleteRequest: MessageTypeDefinition
    ContentResponse: MessageTypeDefinition
    ContentService: SubtypeConstructor<typeof grpc.Client, _content_ContentServiceClient> & { service: ServiceDefinition }
    ContentSingleRequest: MessageTypeDefinition
    ContentSingleResponse: MessageTypeDefinition
    ContentUpdateRequest: MessageTypeDefinition
  }
  queryParams: {
    QueryParamsRequest: MessageTypeDefinition
  }
}

