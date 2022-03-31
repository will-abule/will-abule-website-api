import { verify } from "jsonwebtoken";
import { get } from "config";
import { generateAuthToken } from "../schemas/user-schema";

interface Data {
  token?: string;
  error?: string;
}

export const authGuard = (token: string): Data => {
  try {
    // decoding token

    const decode: any = verify(token, get("jwtPrivateKey"));

    const currentDate = new Date();

    const expi = new Date(decode?.expi);

    if (expi > currentDate) {
      const t = generateAuthToken(decode);
      return { token: JSON.stringify({ token: t, date: t.date }) };
    } else {
      return {
        error: "login section has expired! kindly login again.",
      };
    }
  } catch (error) {
    // catching errors and sending response to the user
    return {
      error: "Could not validate token kindly login again.",
    };
  }
};
