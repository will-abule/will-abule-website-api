import { object, string, ValidationResult } from "joi";
import { Schema, schema } from "mongoose";
import { UrlAddRequest__Output } from "src/shared/interface/protos/url/UrlAddRequest";
import { UrlUpdateRequest__Output } from "src/shared/interface/protos/url/UrlUpdateRequest";

const urlSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    link: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Url = schema("Url", urlSchema);

export function validateUrl(Url: UrlAddRequest__Output): ValidationResult {
  const schema = object({
    token: string().required(),
    title: string().required(),
  });

  return schema.validate(Url);
}

export function validateUrlForUpdate(
  Url: UrlUpdateRequest__Output
): ValidationResult {
  const schema = object({
    token: string().required(),
    _id: string().required(),
    title: string().required(),
  });

  return schema.validate(Url);
}
