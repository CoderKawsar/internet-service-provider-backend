import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CustomerService } from "./customer.service";
import sendResponse from "../../../shared/sendResponse";
import { Customer } from "@prisma/client";
import httpStatus from "http-status";
import { customerFilterableFields } from "./customer.constants";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { generateCustomerId } from "../../../helpers/common";

const addCustomer = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    payload.customerId = await generateCustomerId(payload.coverageAreaId);
    const result = await CustomerService.addCustomer(payload);

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
    const filters = pick(req.query, customerFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await CustomerService.getAllCustomers(
      filters,
      paginationOptions
    );

    sendResponse(res, {
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

const getCustomerByUserId = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CustomerService.getCustomerByUserId(req.params.userId);

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
  getCustomerByUserId,
  updateCustomer,
  deleteCustomer,
};
