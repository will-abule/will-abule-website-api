// Original file: src/shared/protos/content.proto

import type { Content as _content_Content, Content__Output as _content_Content__Output } from '../content/Content';

export interface ContentAddRequest {
  'token'?: (string);
  'data'?: (_content_Content);
}

export interface ContentAddRequest__Output {
  'token': (string);
  'data'?: (_content_Content__Output);
}
