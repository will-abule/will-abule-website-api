// Original file: src/shared/protos/auth.proto


export interface AuthResponse {
  'status'?: (number);
  'result'?: (string);
  'errorMessage'?: (string);
  'token'?: (string);
}

export interface AuthResponse__Output {
  'status': (number);
  'result': (string);
  'errorMessage': (string);
  'token': (string);
}
