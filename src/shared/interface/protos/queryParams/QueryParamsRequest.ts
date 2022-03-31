// Original file: src/shared/protos/shared/query-params.proto


export interface QueryParamsRequest {
  'filter'?: (boolean);
  'pageNumber'?: (number);
  'pageSize'?: (number);
  'sort'?: (string);
  'sortName'?: (string);
  'searchFilters'?: (string);
}

export interface QueryParamsRequest__Output {
  'filter': (boolean);
  'pageNumber': (number);
  'pageSize': (number);
  'sort': (string);
  'sortName': (string);
  'searchFilters': (string);
}
