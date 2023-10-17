import { CoverageDistrict } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addCoverageDistrict = async (
  payload: CoverageDistrict
): Promise<CoverageDistrict> => {
  const result = await prisma.coverageDistrict.create({
    data: payload,
  });
  return result;
};

export const getAllCoverageDistricts = async (): Promise<
  CoverageDistrict[]
> => {
  const result = await prisma.coverageDistrict.findMany({});
  return result;
};

export const getCoverageDistrict = async (
  id: string
): Promise<CoverageDistrict | null> => {
  const result = await prisma.coverageDistrict.findFirst({
    where: { id },
  });
  return result;
};

export const updateCoverageDistrict = async (
  id: string,
  payload: Partial<CoverageDistrict>
): Promise<CoverageDistrict> => {
  const result = await prisma.coverageDistrict.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteCoverageDistrict = async (
  id: string
): Promise<CoverageDistrict> => {
  const result = await prisma.coverageDistrict.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CoverageDistrictService = {
  addCoverageDistrict,
  getAllCoverageDistricts,
  getCoverageDistrict,
  updateCoverageDistrict,
  deleteCoverageDistrict,
};
