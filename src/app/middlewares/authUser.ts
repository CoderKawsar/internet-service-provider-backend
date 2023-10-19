import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../config";
import ApiError from "../../errors/ApiError";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import prisma from "../../shared/prisma";

const authUser =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

      const isUserExist = await prisma.user.findFirst({
        where: {
          id: verifiedUser?.id,
        },
      });

      if (isUserExist) {
        req.user = verifiedUser; // role  , userid
      } else {
        req.user = null;
        throw new ApiError(httpStatus.BAD_REQUEST, "User not found!");
      }

      if (verifiedUser.id === req?.params?.id) {
        next();
      } else {
        throw new ApiError(httpStatus.FORBIDDEN, "Permission denied!");
      }
    } catch (error) {
      next(error);
    }
  };

export default authUser;
