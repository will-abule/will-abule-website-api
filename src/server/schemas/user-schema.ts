import config from "config";
import { sign } from "jsonwebtoken";
import { ValidationResult, object, string } from "joi";
import { Schema, schema } from "mongoose";
import { UserInterface } from "../../shared/interface/app/user-interface";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = schema("User", userSchema);

export function validateUser(User: UserInterface): ValidationResult {
  const schema = object({
    email: string().required(),
    password: string().required(),
  });

  return schema.validate(User);
}

export function generateAuthToken(user: UserInterface) {
  const date = new Date().setMinutes(new Date().getMinutes() + 30);
  const token = sign(
    {
      email: user.email,
      expi: date,
    },

    config.get("jwtPrivateKey"),
    { expiresIn: "30m" }
  );

  return { token, date };
}
