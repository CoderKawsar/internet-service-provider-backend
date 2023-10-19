import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PackageService } from "./package.service";
import sendResponse from "../../../shared/sendResponse";
import { Package } from "@prisma/client";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { packageFilterableFields } from "./package.constants";
import { paginationFields } from "../../../constants/pagination";

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
    const filters = pick(req.query, packageFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await PackageService.getAllPackages(
      filters,
      paginationOptions
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Packages fetched successfully!",
      meta: result.meta,
      data: result.data,
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
