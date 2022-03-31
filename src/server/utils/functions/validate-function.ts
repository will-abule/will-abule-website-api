import { boolean, number, object, string, ValidationResult } from "joi";
import { Types } from "mongoose";

export function validateQueryParams(query: any): ValidationResult {
  const schema = object({
    filter: boolean().required(),
    sort: string().required(),
    sortName: string().required(),
    pageSize: number().required(),
    pageNumber: number().required(),
    searchFilters: string(),
  });

  return schema.validate(query);
}

export const validateObjectId = (id: string): boolean =>
  Types.ObjectId.isValid(id);
