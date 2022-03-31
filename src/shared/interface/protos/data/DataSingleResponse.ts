// Original file: src/shared/protos/data.proto

import type { Data as _data_Data, Data__Output as _data_Data__Output } from '../data/Data';

export interface DataSingleResponse {
  'status'?: (number);
  'data'?: (_data_Data);
  'errorMessage'?: (string);
  'token'?: (string);
}

export interface DataSingleResponse__Output {
  'status': (number);
  'data'?: (_data_Data__Output);
  'errorMessage': (string);
  'token': (string);
}
