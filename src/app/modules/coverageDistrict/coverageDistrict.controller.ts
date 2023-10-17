import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CoverageDistrictService } from "./coverageDistrict.service";
import sendResponse from "../../../shared/sendResponse";
import { CoverageDistrict } from "@prisma/client";
import httpStatus from "http-status";

const addCoverageDistrict = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageDistrictService.addCoverageDistrict(req.body);

    sendResponse<CoverageDistrict>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage district added successfully!",
      data: result,
    });
  }
);

const getAllCoverageDistricts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageDistrictService.getAllCoverageDistricts();

    sendResponse<CoverageDistrict[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All coverage districts fetched successfully!",
      data: result,
    });
  }
);

const getCoverageDistrict = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageDistrictService.getCoverageDistrict(
      req.params.id
    );

    sendResponse<CoverageDistrict>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage district fetched successfully!",
      data: result,
    });
  }
);

const updateCoverageDistrict = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageDistrictService.updateCoverageDistrict(
      req.params.id,
      req.body
    );

    sendResponse<CoverageDistrict>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage district updated successfully!",
      data: result,
    });
  }
);

const deleteCoverageDistrict = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageDistrictService.deleteCoverageDistrict(
      req.params.id
    );

    sendResponse<CoverageDistrict>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage district deleted successfully!",
      data: result,
    });
  }
);

export const CoverageDistrictController = {
  addCoverageDistrict,
  getAllCoverageDistricts,
  getCoverageDistrict,
  updateCoverageDistrict,
  deleteCoverageDistrict,
};
