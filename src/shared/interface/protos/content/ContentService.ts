// Original file: src/shared/protos/content.proto

import type * as grpc from '@grpc/grpc-js'
import type { ContentAddRequest as _content_ContentAddRequest, ContentAddRequest__Output as _content_ContentAddRequest__Output } from '../content/ContentAddRequest';
import type { ContentDeleteRequest as _content_ContentDeleteRequest, ContentDeleteRequest__Output as _content_ContentDeleteRequest__Output } from '../content/ContentDeleteRequest';
import type { ContentResponse as _content_ContentResponse, ContentResponse__Output as _content_ContentResponse__Output } from '../content/ContentResponse';
import type { ContentSingleRequest as _content_ContentSingleRequest, ContentSingleRequest__Output as _content_ContentSingleRequest__Output } from '../content/ContentSingleRequest';
import type { ContentSingleResponse as _content_ContentSingleResponse, ContentSingleResponse__Output as _content_ContentSingleResponse__Output } from '../content/ContentSingleResponse';
import type { ContentUpdateRequest as _content_ContentUpdateRequest, ContentUpdateRequest__Output as _content_ContentUpdateRequest__Output } from '../content/ContentUpdateRequest';
import type { QueryParamsRequest as _queryParams_QueryParamsRequest, QueryParamsRequest__Output as _queryParams_QueryParamsRequest__Output } from '../queryParams/QueryParamsRequest';

export interface ContentServiceClient extends grpc.Client {
  AddContent(argument: _content_ContentAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddContent(argument: _content_ContentAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddContent(argument: _content_ContentAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  AddContent(argument: _content_ContentAddRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addContent(argument: _content_ContentAddRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addContent(argument: _content_ContentAddRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addContent(argument: _content_ContentAddRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  addContent(argument: _content_ContentAddRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  DeleteContent(argument: _content_ContentDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteContent(argument: _content_ContentDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteContent(argument: _content_ContentDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteContent(argument: _content_ContentDeleteRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteContent(argument: _content_ContentDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteContent(argument: _content_ContentDeleteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteContent(argument: _content_ContentDeleteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  deleteContent(argument: _content_ContentDeleteRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetContents(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  GetContents(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  GetContents(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  GetContents(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  getContents(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  getContents(argument: _queryParams_QueryParamsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  getContents(argument: _queryParams_QueryParamsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  getContents(argument: _queryParams_QueryParamsRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetSingleContent(argument: _content_ContentSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleContent(argument: _content_ContentSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleContent(argument: _content_ContentSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  GetSingleContent(argument: _content_ContentSingleRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleContent(argument: _content_ContentSingleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleContent(argument: _content_ContentSingleRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleContent(argument: _content_ContentSingleRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  getSingleContent(argument: _content_ContentSingleRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
  UpdateContent(argument: _content_ContentUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContent(argument: _content_ContentUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContent(argument: _content_ContentUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContent(argument: _content_ContentUpdateRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateContent(argument: _content_ContentUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateContent(argument: _content_ContentUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateContent(argument: _content_ContentUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  updateContent(argument: _content_ContentUpdateRequest, callback: (error?: grpc.ServiceError, result?: _content_ContentSingleResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ContentServiceHandlers extends grpc.UntypedServiceImplementation {
  AddContent: grpc.handleUnaryCall<_content_ContentAddRequest__Output, _content_ContentSingleResponse>;
  
  DeleteContent: grpc.handleUnaryCall<_content_ContentDeleteRequest__Output, _content_ContentSingleResponse>;
  
  GetContents: grpc.handleUnaryCall<_queryParams_QueryParamsRequest__Output, _content_ContentResponse>;
  
  GetSingleContent: grpc.handleUnaryCall<_content_ContentSingleRequest__Output, _content_ContentSingleResponse>;
  
  UpdateContent: grpc.handleUnaryCall<_content_ContentUpdateRequest__Output, _content_ContentSingleResponse>;
  
}
