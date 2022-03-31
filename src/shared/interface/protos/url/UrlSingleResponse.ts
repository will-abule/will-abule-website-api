// Original file: src/shared/protos/url.proto

import type { Data as _url_Data, Data__Output as _url_Data__Output } from '../url/Data';

export interface UrlSingleResponse {
  'status'?: (number);
  'data'?: (_url_Data);
  'errorMessage'?: (string);
  'token'?: (string);
}

export interface UrlSingleResponse__Output {
  'status': (number);
  'data'?: (_url_Data__Output);
  'errorMessage': (string);
  'token': (string);
}
