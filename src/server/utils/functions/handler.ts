import winston from "winston";

export const errorHandler = (err: any) => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Error Handler: ", err);
  } else {
    //save error
    winston.error(err.message, err);
  }
};
