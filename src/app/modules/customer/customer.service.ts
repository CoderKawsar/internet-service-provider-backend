import { Customer, Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IPaginationFilterRequest } from "../packages/package.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IGenericResponse } from "../../../interfaces/common";

export const addCustomer = async (payload: Customer): Promise<Customer> => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

export const getAllCustomers = async (
  filters: IPaginationFilterRequest,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Customer[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (Object.keys(filters).length > 0) {
    andConditions.push({
      AND: Object.keys(filters).map((key) => ({
        [key]: {
          equals: (filters as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.CustomerWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.customer.findMany({
    include: {
      user: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      paginationOptions.sortBy && paginationOptions.sortOrder
        ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
        : {
            createdAt: "desc",
          },
  });

  const total = await prisma.customer.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

export const getCustomerById = async (id: string): Promise<Customer | null> => {
  const result = await prisma.customer.findFirst({
    where: { id },
    include: {
      user: true,
    },
  });
  return result;
};

export const getCustomerByUserId = async (
  userId: string
): Promise<Customer | null> => {
  const result = await prisma.customer.findFirst({
    where: { userId: userId },
    include: {
      user: true,
      package: true,
    },
  });
  return result;
};

export const updateCustomer = async (
  id: string,
  payload: Partial<Customer>
): Promise<Customer> => {
  const result = await prisma.customer.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteCustomer = async (id: string): Promise<Customer> => {
  const result = await prisma.customer.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CustomerService = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomerByUserId,
  updateCustomer,
  deleteCustomer,
};
