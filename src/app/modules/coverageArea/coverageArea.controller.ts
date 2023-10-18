import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CoverageAreaService } from "./coverageArea.service";
import sendResponse from "../../../shared/sendResponse";
import { CoverageArea } from "@prisma/client";
import httpStatus from "http-status";

const addCoverageArea = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.addCoverageArea(req.body);

    sendResponse<CoverageArea>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage area added successfully!",
      data: result,
    });
  }
);

const getAllCoverageAreas = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.getAllCoverageAreas();

    sendResponse<CoverageArea[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All coverage area fetched successfully!",
      data: result,
    });
  }
);

const getCoverageAreaById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.getCoverageAreaById(req.params.id);

    sendResponse<CoverageArea>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage area fetched successfully!",
      data: result,
    });
  }
);

const getCoverageAreaByUpazillaOrThanaId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.getCoverageAreaByUpazillaOrThanaId(
      req.params.upazillaOrThanaId
    );

    sendResponse<CoverageArea[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage area fetched of specific upazilla/thana successfully!",
      data: result,
    });
  }
);

const updateCoverageArea = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.updateCoverageArea(
      req.params.id,
      req.body
    );

    sendResponse<CoverageArea>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage area updated successfully!",
      data: result,
    });
  }
);

const deleteCoverageArea = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoverageAreaService.deleteCoverageArea(req.params.id);

    sendResponse<CoverageArea>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Coverage area deleted successfully!",
      data: result,
    });
  }
);

export const CoverageAreaController = {
  addCoverageArea,
  getAllCoverageAreas,
  getCoverageAreaById,
  getCoverageAreaByUpazillaOrThanaId,
  updateCoverageArea,
  deleteCoverageArea,
};
