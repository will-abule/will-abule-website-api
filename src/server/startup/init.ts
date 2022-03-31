import joi from "joi";
// import { routes } from "./routes";
import { logger } from "../startup/logging";

// @ts-ignore
import objectId from "joi-objectid";
//

export function init() {
  objectId(joi);
  logger();
  // routes();
}
