import { array, object, string, ValidationResult } from "joi";
import { Schema, schema } from "mongoose";
import { ContentAddRequest } from "../../shared/interface/protos/content/ContentAddRequest";
import { ContentUpdateRequest } from "../../shared/interface/protos/content/ContentUpdateRequest";

const contentSchema = new Schema(
  {
    urlLink: {
      type: String,
      required: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    position: {
      type: Number,
      default: 1,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const Content = schema("Content", contentSchema);

export function validateContent(Content: ContentAddRequest): ValidationResult {
  const schema = object({
    token: string().required(),
    data: object()
      .keys({
        urlLink: string().required(),
        title: string().required(),
        position: string(),
        content: string().required(),
        tags: array(),
      })
      .required(),
  });

  return schema.validate(Content);
}

export function validateContentForUpdate(
  Content: ContentUpdateRequest
): ValidationResult {
  const schema = object({
    token: string().required(),
    data: object()
      .keys({
        _id: string().required(),
        urlLink: string(),
        title: string(),
        position: string(),
        content: string(),
        tags: array(),
      })
      .required(),
  });

  return schema.validate(Content);
}
