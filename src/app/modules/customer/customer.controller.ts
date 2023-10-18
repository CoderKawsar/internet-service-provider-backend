import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import { Customer } from "@prisma/client";
import httpStatus from "http-status";

const addCustomer = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.addCustomer(req.body);

    sendResponse<Customer>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Customer added successfully!",
      data: result,
    });
  }
);

const getAllCustomers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.getAllCustomers();

    sendResponse<Customer[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All Customers fetched successfully!",
      data: result,
    });
  }
);

const getCustomerById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.getCustomerById(req.params.id);

    sendResponse<Customer>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Customer fetched successfully!",
      data: result,
    });
  }
);

const updateCustomer = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.updateCustomer(
      req.params.id,
      req.body
    );

    sendResponse<Customer>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Customer updated successfully!",
      data: result,
    });
  }
);

const deleteCustomer = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.deleteCustomer(req.params.id);

    sendResponse<Customer>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Customer deleted successfully!",
      data: result,
    });
  }
);

export const CustomerController = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
