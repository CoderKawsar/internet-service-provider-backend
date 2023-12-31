import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CoverageUpazillaOrThanaService } from "./coverageUpazillaOrThana.service";
import sendResponse from "../../../shared/sendResponse";
import { CoverageUpazillaOrThana } from "@prisma/client";
import httpStatus from "http-status";

const addCoverageUpazillaOrThana = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.addCoverageUpazillaOrThana(req.body);

    sendResponse<CoverageUpazillaOrThana>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage upazilla/thana added successfully!",
      data: result,
    });
  }
);

const getAllCoverageUpazillaOrThanas = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.getAllCoverageUpazillaOrThanas();

    sendResponse<CoverageUpazillaOrThana[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All coverage upazilla/thanas fetched successfully!",
      data: result,
    });
  }
);

const getCoverageUpazillaOrThana = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.getCoverageUpazillaOrThana(
        req.params.id
      );

    sendResponse<CoverageUpazillaOrThana>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage upazilla/thana fetched successfully!",
      data: result,
    });
  }
);

const getUpazillaOrThanasByDistrictId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.getUpazillaOrThanasByDistrictId(
        req.params.districtId
      );

    sendResponse<CoverageUpazillaOrThana[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "This district's coverage upazilla/thanas fetched successfully!",
      data: result,
    });
  }
);

const updateCoverageUpazillaOrThana = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.updateCoverageUpazillaOrThana(
        req.params.id,
        req.body
      );

    sendResponse<CoverageUpazillaOrThana>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage upazilla/thana updated successfully!",
      data: result,
    });
  }
);

const deleteCoverageUpazillaOrThana = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await CoverageUpazillaOrThanaService.deleteCoverageUpazillaOrThana(
        req.params.id
      );

    sendResponse<CoverageUpazillaOrThana>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage upazilla/thana deleted successfully!",
      data: result,
    });
  }
);

export const CoverageUpazillaOrThanaController = {
  addCoverageUpazillaOrThana,
  getAllCoverageUpazillaOrThanas,
  getCoverageUpazillaOrThana,
  getUpazillaOrThanasByDistrictId,
  updateCoverageUpazillaOrThana,
  deleteCoverageUpazillaOrThana,
};
