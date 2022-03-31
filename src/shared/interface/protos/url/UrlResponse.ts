// Original file: src/shared/protos/url.proto

import type { Data as _url_Data, Data__Output as _url_Data__Output } from '../url/Data';

export interface UrlResponse {
  'status'?: (number);
  'errorMessage'?: (string);
  'data'?: (_url_Data)[];
  'pageNumber'?: (number);
  'pageSize'?: (number);
  'totalPage'?: (number);
  'records'?: (number);
}

export interface UrlResponse__Output {
  'status': (number);
  'errorMessage': (string);
  'data': (_url_Data__Output)[];
  'pageNumber': (number);
  'pageSize': (number);
  'totalPage': (number);
  'records': (number);
}
