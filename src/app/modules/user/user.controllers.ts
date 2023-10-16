import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import config from "../../../config";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.registerUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully!",
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.login(req.body);

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", result.refreshToken, cookieOptions);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully!",
    data: result,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await UserService.refreshToken(refreshToken);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Token refreshed successfully!",
    data: result,
  });
});

export const UserController = {
  registerUser,
  login,
  refreshToken,
};
