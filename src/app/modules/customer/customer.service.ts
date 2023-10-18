import { Customer } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addCustomer = async (payload: Customer): Promise<Customer> => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

export const getAllCustomers = async (): Promise<Customer[]> => {
  const result = await prisma.customer.findMany({});
  return result;
};

export const getCustomerById = async (id: string): Promise<Customer | null> => {
  const result = await prisma.customer.findFirst({
    where: { id },
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
  updateCustomer,
  deleteCustomer,
};
