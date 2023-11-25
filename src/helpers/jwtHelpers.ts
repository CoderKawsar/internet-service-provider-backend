import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import ApiError from "../errors/ApiError";
import httpStatus from "http-status";

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, secret: Secret) => {
  try {
    const isVerified = jwt.verify(token, secret) as JwtPayload;
    return isVerified;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid token");
  }
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
