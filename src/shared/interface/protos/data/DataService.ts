// Original file: src/shared/protos/data.proto

import type * as grpc from '@grpc/grpc-js'
import type { DataAddRequest as _data_DataAddRequest, DataAddRequest__Output as _data_DataAddRequest__Output } from '../data/DataAddRequest';
import type { DataDeleteRequest as _data_DataDeleteRequest, DataDeleteRequest__Output as _data_DataDeleteRequest__Output } from '../data/DataDeleteRequest';
import type { DataResponse as _data_DataResponse, DataResponse__Output as _data_DataResponse__Output } from '../data/DataResponse';
import type { DataSingleRequest as _data_DataSingleRequest, DataSingleRequest__Output as _data_DataSingleRequest__Output } from '../data/DataSingleRequest';
import type { DataSingleResponse as _data_DataSingleResponse, DataSingleResponse__Output as _data_DataSingleResponse__Output } from '../data/DataSingleResponse';
import type { DataUpdateRequest as _data_DataUpdateRequest, DataUpdateRequest__Output as _data_DataUpdateRequest__Output } from '../data/DataUpdateRequest';
import type { QueryParamsRequest as _queryParams_QueryParamsRequest, QueryParamsRequest__Output as _queryParams_QueryParamsRequest__Output } from '../queryParams/QueryParamsRequest';

export interface DataServiceClient extends grpc.Client {
  AddData(argument: _data_DataAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddData(argument: _data_DataAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddData(argument: _data_DataAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddData(argument: _data_DataAddRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addData(argument: _data_DataAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addData(argument: _data_DataAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addData(argument: _data_DataAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addData(argument: _data_DataAddRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  DeleteData(argument: _data_DataDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteData(argument: _data_DataDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteData(argument: _data_DataDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteData(argument: _data_DataDeleteRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteData(argument: _data_DataDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteData(argument: _data_DataDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteData(argument: _data_DataDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteData(argument: _data_DataDeleteRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetAllData(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  GetAllData(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  GetAllData(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  GetAllData(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  getAllData(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  getAllData(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  getAllData(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  getAllData(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _data_DataResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetSingleData(argument: _data_DataSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleData(argument: _data_DataSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleData(argument: _data_DataSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleData(argument: _data_DataSingleRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleData(argument: _data_DataSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleData(argument: _data_DataSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleData(argument: _data_DataSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleData(argument: _data_DataSingleRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  UpdateData(argument: _data_DataUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateData(argument: _data_DataUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateData(argument: _data_DataUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateData(argument: _data_DataUpdateRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateData(argument: _data_DataUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateData(argument: _data_DataUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateData(argument: _data_DataUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateData(argument: _data_DataUpdateRequest, callback: (error?: grpc.ServiceError, result?: _data_DataSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface DataServiceHandlers extends grpc.UntypedServiceImplementation {
  AddData: grpc.handleUnaryCall<_data_DataAddRequest__Output, _data_DataSingleResponse>;
  
  DeleteData: grpc.handleUnaryCall<_data_DataDeleteRequest__Output, _data_DataSingleResponse>;
  
  GetAllData: grpc.handleUnaryCall<_queryParams_QueryParamsRequest__Output, _data_DataResponse>;
  
  GetSingleData: grpc.handleUnaryCall<_data_DataSingleRequest__Output, _data_DataSingleResponse>;
  
  UpdateData: grpc.handleUnaryCall<_data_DataUpdateRequest__Output, _data_DataSingleResponse>;
  
}
