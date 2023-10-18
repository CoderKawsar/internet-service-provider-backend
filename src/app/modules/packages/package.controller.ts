import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PackageService } from "./package.service";
import sendResponse from "../../../shared/sendResponse";
import { Package } from "@prisma/client";
import httpStatus from "http-status";

const addPackage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PackageService.addPackage(req.body);

    sendResponse<Package>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Package added successfully!",
      data: result,
    });
  }
);

const getAllPackages = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PackageService.getAllPackages();

    sendResponse<Package[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Packages fetched successfully!",
      data: result,
    });
  }
);

const getPackageById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PackageService.getPackageById(req.params.id);

    sendResponse<Package>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Package fetched successfully!",
      data: result,
    });
  }
);

const updatePackage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PackageService.updatePackage(req.params.id, req.body);

    sendResponse<Package>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Package updated successfully!",
      data: result,
    });
  }
);

const deletePackage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await PackageService.deletePackage(req.params.id);

    sendResponse<Package>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Package deleted successfully!",
      data: result,
    });
  }
);

export const PackageController = {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
