import { Package, Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IPaginationFilterRequest } from "./package.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IGenericResponse } from "../../../interfaces/common";
import { packageSearchableFields } from "./package.constants";

export const addPackage = async (payload: Package): Promise<Package> => {
  const result = await prisma.package.create({
    data: payload,
  });
  return result;
};

export const getAllPackages = async (
  filters: IPaginationFilterRequest,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Package[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: packageSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: parseInt((filterData as any)[key]),
        },
      })),
    });
  }

  const whereConditions: Prisma.PackageWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.package.findMany({
    include: {
      StreamingServicesForPackage: {
        include: {
          streamingService: true,
        },
      },
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      paginationOptions.sortBy && paginationOptions.sortOrder
        ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
        : {
            speed: "asc",
          },
  });

  const total = await prisma.package.count({
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
