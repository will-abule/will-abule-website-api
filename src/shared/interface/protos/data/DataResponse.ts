// Original file: src/shared/protos/data.proto

import type { Data as _data_Data, Data__Output as _data_Data__Output } from '../data/Data';

export interface DataResponse {
  'status'?: (number);
  'errorMessage'?: (string);
  'data'?: (_data_Data)[];
  'pageNumber'?: (number);
  'pageSize'?: (number);
  'totalPage'?: (number);
  'records'?: (number);
}

export interface DataResponse__Output {
  'status': (number);
  'errorMessage': (string);
  'data': (_data_Data__Output)[];
  'pageNumber': (number);
  'pageSize': (number);
  'totalPage': (number);
  'records': (number);
}
