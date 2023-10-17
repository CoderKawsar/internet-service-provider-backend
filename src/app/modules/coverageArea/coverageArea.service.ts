import { CoverageArea } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addCoverageArea = async (
  payload: CoverageArea
): Promise<CoverageArea> => {
  const result = await prisma.coverageArea.create({
    data: payload,
  });
  return result;
};

export const getAllCoverageAreas = async (): Promise<CoverageArea[]> => {
  const result = await prisma.coverageArea.findMany({});
  return result;
};

export const getCoverageArea = async (
  id: string
): Promise<CoverageArea | null> => {
  const result = await prisma.coverageArea.findFirst({
    where: { id },
  });
  return result;
};

export const updateCoverageArea = async (
  id: string,
  payload: Partial<CoverageArea>
): Promise<CoverageArea> => {
  const result = await prisma.coverageArea.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteCoverageArea = async (id: string): Promise<CoverageArea> => {
  const result = await prisma.coverageArea.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CoverageAreaService = {
  addCoverageArea,
  getAllCoverageAreas,
  getCoverageArea,
  updateCoverageArea,
  deleteCoverageArea,
};
