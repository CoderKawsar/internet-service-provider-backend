import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { StreamingServiceService } from "./streamingService.service";
import sendResponse from "../../../shared/sendResponse";
import { StreamingService } from "@prisma/client";
import httpStatus from "http-status";

const addStreamingService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServiceService.addStreamingService(req.body);

    sendResponse<StreamingService>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service added successfully!",
      data: result,
    });
  }
);

const getAllStreamingServices = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServiceService.getAllStreamingServices();

    sendResponse<StreamingService[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All streaming Service fetched successfully!",
      data: result,
    });
  }
);

const getStreamingService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServiceService.getStreamingService(
      req.params.id
    );

    sendResponse<StreamingService>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service fetched successfully!",
      data: result,
    });
  }
);

const updateStreamingService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServiceService.updateStreamingService(
      req.params.id,
      req.body
    );

    sendResponse<StreamingService>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service updated successfully!",
      data: result,
    });
  }
);

const deleteStreamingService = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StreamingServiceService.deleteStreamingService(
      req.params.id
    );

    sendResponse<StreamingService>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Streaming service deleted successfully!",
      data: result,
    });
  }
);

export const StreamingServiceController = {
  addStreamingService,
  getAllStreamingServices,
  getStreamingService,
  updateStreamingService,
  deleteStreamingService,
};
