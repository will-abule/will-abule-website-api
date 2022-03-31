import type * as grpc from '@grpc/grpc-js';
import type { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DataServiceClient as _data_DataServiceClient } from './data/DataService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  data: {
    Data: MessageTypeDefinition
    DataAddRequest: MessageTypeDefinition
    DataDeleteRequest: MessageTypeDefinition
    DataResponse: MessageTypeDefinition
    DataService: SubtypeConstructor<typeof grpc.Client, _data_DataServiceClient> & { service: ServiceDefinition }
    DataSingleRequest: MessageTypeDefinition
    DataSingleResponse: MessageTypeDefinition
    DataUpdateRequest: MessageTypeDefinition
  }
  queryParams: {
    QueryParamsRequest: MessageTypeDefinition
  }
}

