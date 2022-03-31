import { boolean, object, string, ValidationResult } from "joi";
import { Schema, schema } from "mongoose";
import { DataAddRequest } from "../../shared/interface/protos/data/DataAddRequest";
import { DataUpdateRequest } from "../../shared/interface/protos/data/DataUpdateRequest";

const dataSchema = new Schema(
  {
    contendId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    position: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Data = schema("Data", dataSchema);

export function validateData(Data: DataAddRequest): ValidationResult {
  const schema = object({
    token: string().required(),
    data: object()
      .keys({
        contendId: string().required(),
        title: string().required(),
        position: string().required(),
        data: string().required(),
        publish: boolean(),
      })
      .required(),
  });

  return schema.validate(Data);
}

export function validateDataForUpdate(
  Data: DataUpdateRequest
): ValidationResult {
  const schema = object({
    token: string().required(),
    data: object()
      .keys({
        _id: string().required(),
        contendId: string(),
        title: string(),
        position: string(),
        data: string(),
        publish: boolean(),
      })
      .required(),
  });

  return schema.validate(Data);
}
