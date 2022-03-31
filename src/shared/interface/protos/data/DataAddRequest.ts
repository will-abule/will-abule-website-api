// Original file: src/shared/protos/data.proto

import type { Data as _data_Data, Data__Output as _data_Data__Output } from '../data/Data';

export interface DataAddRequest {
  'token'?: (string);
  'data'?: (_data_Data);
}

export interface DataAddRequest__Output {
  'token': (string);
  'data'?: (_data_Data__Output);
}
