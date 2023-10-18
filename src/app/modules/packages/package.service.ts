import { Package } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addPackage = async (payload: Package): Promise<Package> => {
  const result = await prisma.package.create({
    data: payload,
  });
  return result;
};

export const getAllPackages = async (): Promise<Package[]> => {
  const result = await prisma.package.findMany({});
  return result;
};

export const getPackageById = async (id: string): Promise<Package | null> => {
  const result = await prisma.package.findFirst({
    where: { id },
  });
  return result;
};

export const updatePackage = async (
  id: string,
  payload: Partial<Package>
): Promise<Package> => {
  const result = await prisma.package.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deletePackage = async (id: string): Promise<Package> => {
  const result = await prisma.package.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PackageService = {
  addPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
