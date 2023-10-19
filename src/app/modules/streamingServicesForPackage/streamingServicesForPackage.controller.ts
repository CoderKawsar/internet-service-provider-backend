import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StreamingServicesForPackage } from "@prisma/client";
import httpStatus from "http-status";
import { StreamingServicesForPackagesService } from "./streamingServicesForPackage.service";

const addOneIntoDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServicesForPackagesService.addOneIntoDB(
      req.body
    );

    sendResponse<StreamingServicesForPackage>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service for a package added successfully!",
      data: result,
    });
  }
);

const getAllFromDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServicesForPackagesService.getAllFromDB();

    sendResponse<StreamingServicesForPackage[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All streaming Services for package fetched successfully!",
      data: result,
    });
  }
);

const getSingleFromDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServicesForPackagesService.getSingleFromDB(
      req.params.id
    );

    sendResponse<StreamingServicesForPackage>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service for a package fetched successfully!",
      data: result,
    });
  }
);

const updateOneIntoDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServicesForPackagesService.updateOneIntoDB(
      req.params.id,
      req.body
    );

    sendResponse<StreamingServicesForPackage>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service for a package updated successfully!",
      data: result,
    });
  }
);

const deleteOneFromDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServicesForPackagesService.deleteOneFromDB(
      req.params.id
    );

    sendResponse<StreamingServicesForPackage>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service for a package deleted successfully!",
      data: result,
    });
  }
);

export const StreamingServiceController = {
  addOneIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneFromDB,
};
