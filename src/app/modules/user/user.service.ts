import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import config from "../../../config";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { Secret } from "jsonwebtoken";
import {
  IFeedBackPayload,
  ILoginInfo,
  IRefreshTokenResponse,
} from "./user.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { selectedFields } from "./user.constant";

// ======================================================================================
// Register User
// =================================================================================== //
const registerUser = async (
  userData: User
): Promise<Omit<User, "password">> => {
  const { password, ...otherData } = userData;

  // Generate a salt synchronously
  const saltRounds = parseInt(config.jwt.bcrypt_salt_rounds as string) || 12;
  const salt = bcrypt.genSaltSync(saltRounds);

  // Hash the password synchronously
  const hashedPassword = bcrypt.hashSync(password, salt);

  // creating user
  const result = await prisma.user.create({
    data: { ...otherData, password: hashedPassword },
  });

  // separating password and others data
  const { password: createdPass, ...dataWithoutPassword } = result;

  // returning others data
  return dataWithoutPassword;
};

// ======================================================================================
// Login User
// =================================================================================== //
const login = async (loginInfo: ILoginInfo) => {
  const { email, password } = loginInfo;

  // is the entered email exists in users
  const isUserExist = await prisma.user.findFirst({
    where: { email },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invalid user!");
  }

  // compare password
  const isPasswordMatched = bcrypt.compareSync(
    password,
    isUserExist?.password as string
  );

  // if password doesn't match, throw error
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid credentials!");
  }

  // creating payload for token
  const payload = {
    id: isUserExist.id,
    role: isUserExist.role,
  };

  // creating access token
  const accessToken = jwtHelpers.createToken(
    payload,
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  // creating refresh token
  const refreshToken = jwtHelpers.createToken(
    payload,
    config.jwt.refresh_secret as string,
    config.jwt.refresh_expires_in as string
  );

  return { isPasswordMatched, accessToken, refreshToken };
};

// ======================================================================================
// Refresh token
// =================================================================================== //
const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const { userId } = verifiedToken;

  // checking if refresh token's user is deleted
  const isUserExist = await prisma.user.findFirst({ where: { id: userId } });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  //generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

// ======================================================================================
// Get all users
// =================================================================================== //
const getAllUsers = async (): Promise<Omit<User, "password">[]> => {
  const result = await prisma.user.findMany({
    select: selectedFields,
  });
  return result;
};

// ======================================================================================
// Get single users
// =================================================================================== //
const getSingleUser = async (
  id: string
): Promise<Omit<User, "password"> | null> => {
  const result = await prisma.user.findFirst({
    where: { id },
    select: selectedFields,
  });
  return result;
};

// ======================================================================================
// Update single user
// =================================================================================== //
const updateSingleUser = async (
  id: string,
  payload: Partial<Omit<User, "password">>
): Promise<Omit<User, "password">> => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
    select: selectedFields,
  });

  return result;
};

// ======================================================================================
// Update single user
// =================================================================================== //
const deleteSingleUser = async (
  id: string
): Promise<Omit<User, "password">> => {
  const result = await prisma.user.delete({
    where: { id },
    select: selectedFields,
  });

  return result;
};

// ======================================================================================
// Send feedback from user via email(nodemailer)
// =================================================================================== //
const sendFeedback = async (payload: IFeedBackPayload) => {
  const { name, email, message } = payload;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.nodemailer.email,
      pass: config.nodemailer.email_password,
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: config.nodemailer.email,
    subject: `Email from Name: ${name}, Email: ${email} via ISP website`,
    text: message,
  };

  // Return a promise for async operations
  return transporter.sendMail(mailOptions);
};

export const UserService = {
  registerUser,
  login,
  refreshToken,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  sendFeedback,
};
