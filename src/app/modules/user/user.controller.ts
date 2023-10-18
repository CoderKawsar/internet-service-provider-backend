import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import config from "../../../config";
import { ENUM_USER_ROLE } from "../../../enums/user";
import ApiError from "../../../errors/ApiError";

// ======================================================================================
// Register user
// =================================================================================== //
const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.registerUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully!",
    data: result,
  });
});

// ======================================================================================
// Login user
// =================================================================================== //
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

// ======================================================================================
// Refresh token
// =================================================================================== //
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

// ======================================================================================
// Get all users
// =================================================================================== //
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Users fetched successfully!",
    data: result,
  });
});

// ======================================================================================
// Get single user
// =================================================================================== //
const getSingleUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserService.getSingleUser(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User fetched successfully!",
      data: result,
    });
  }
);

// ======================================================================================
// Update single user
// =================================================================================== //
const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const currentUser = req?.user;

  // admin can not update role to super_admin
  if (
    currentUser?.role === ENUM_USER_ROLE.ADMIN &&
    payload?.role === ENUM_USER_ROLE.SUPER_ADMIN
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "You can not change your role to super admin!"
    );
  }

  // user and customer cannot update their role
  if (payload.role) {
    if (
      (currentUser?.role === ENUM_USER_ROLE.CUSTOMER ||
        payload?.role === ENUM_USER_ROLE.USER) &&
      currentUser?.role !== payload?.role
    ) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "You can not change your role!"
      );
    }
  }

  const result = await UserService.updateSingleUser(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully!",
    data: result,
  });
});

// ======================================================================================
// Delete single user
// =================================================================================== //
const deleteSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteSingleUser(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted successfully!",
    data: result,
  });
});

export const UserController = {
  registerUser,
  login,
  refreshToken,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
