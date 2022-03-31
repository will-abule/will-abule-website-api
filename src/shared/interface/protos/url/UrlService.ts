// Original file: src/shared/protos/url.proto

import type * as grpc from '@grpc/grpc-js'
import type { QueryParamsRequest as _queryParams_QueryParamsRequest, QueryParamsRequest__Output as _queryParams_QueryParamsRequest__Output } from '../queryParams/QueryParamsRequest';
import type { UrlAddRequest as _url_UrlAddRequest, UrlAddRequest__Output as _url_UrlAddRequest__Output } from '../url/UrlAddRequest';
import type { UrlDeleteRequest as _url_UrlDeleteRequest, UrlDeleteRequest__Output as _url_UrlDeleteRequest__Output } from '../url/UrlDeleteRequest';
import type { UrlResponse as _url_UrlResponse, UrlResponse__Output as _url_UrlResponse__Output } from '../url/UrlResponse';
import type { UrlSingleRequest as _url_UrlSingleRequest, UrlSingleRequest__Output as _url_UrlSingleRequest__Output } from '../url/UrlSingleRequest';
import type { UrlSingleResponse as _url_UrlSingleResponse, UrlSingleResponse__Output as _url_UrlSingleResponse__Output } from '../url/UrlSingleResponse';
import type { UrlUpdateRequest as _url_UrlUpdateRequest, UrlUpdateRequest__Output as _url_UrlUpdateRequest__Output } from '../url/UrlUpdateRequest';

export interface UrlServiceClient extends grpc.Client {
  AddUrl(argument: _url_UrlAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddUrl(argument: _url_UrlAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddUrl(argument: _url_UrlAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddUrl(argument: _url_UrlAddRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addUrl(argument: _url_UrlAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addUrl(argument: _url_UrlAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addUrl(argument: _url_UrlAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addUrl(argument: _url_UrlAddRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  DeleteUrl(argument: _url_UrlDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteUrl(argument: _url_UrlDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteUrl(argument: _url_UrlDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteUrl(argument: _url_UrlDeleteRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteUrl(argument: _url_UrlDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteUrl(argument: _url_UrlDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteUrl(argument: _url_UrlDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteUrl(argument: _url_UrlDeleteRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetSingleUrl(argument: _url_UrlSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleUrl(argument: _url_UrlSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleUrl(argument: _url_UrlSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleUrl(argument: _url_UrlSingleRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleUrl(argument: _url_UrlSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleUrl(argument: _url_UrlSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleUrl(argument: _url_UrlSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleUrl(argument: _url_UrlSingleRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetUrls(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  GetUrls(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  GetUrls(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  GetUrls(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  getUrls(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  getUrls(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  getUrls(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  getUrls(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlResponse__Output) => void): grpc.ClientUnaryCall;
  
  UpdateUrl(argument: _url_UrlUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateUrl(argument: _url_UrlUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateUrl(argument: _url_UrlUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateUrl(argument: _url_UrlUpdateRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateUrl(argument: _url_UrlUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateUrl(argument: _url_UrlUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateUrl(argument: _url_UrlUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateUrl(argument: _url_UrlUpdateRequest, callback: (error?: grpc.ServiceError, result?: _url_UrlSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface UrlServiceHandlers extends grpc.UntypedServiceImplementation {
  AddUrl: grpc.handleUnaryCall<_url_UrlAddRequest__Output, _url_UrlSingleResponse>;
  
  DeleteUrl: grpc.handleUnaryCall<_url_UrlDeleteRequest__Output, _url_UrlSingleResponse>;
  
  GetSingleUrl: grpc.handleUnaryCall<_url_UrlSingleRequest__Output, _url_UrlSingleResponse>;
  
  GetUrls: grpc.handleUnaryCall<_queryParams_QueryParamsRequest__Output, _url_UrlResponse>;
  
  UpdateUrl: grpc.handleUnaryCall<_url_UrlUpdateRequest__Output, _url_UrlSingleResponse>;
  
}
