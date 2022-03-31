// Original file: src/shared/protos/data.proto

import type { Data as _data_Data, Data__Output as _data_Data__Output } from '../data/Data';

export interface DataUpdateRequest {
  '_id'?: (string);
  'token'?: (string);
  'data'?: (_data_Data);
}

export interface DataUpdateRequest__Output {
  '_id': (string);
  'token': (string);
  'data'?: (_data_Data__Output);
}
