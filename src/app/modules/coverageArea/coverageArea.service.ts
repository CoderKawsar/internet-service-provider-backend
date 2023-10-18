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
  const result = await prisma.coverageArea.findMany({
    include: {
      upazillaOrThana: {
        include: {
          district: true,
        },
      },
    },
  });
  return result;
};

export const getCoverageAreaById = async (
  id: string
): Promise<CoverageArea | null> => {
  const result = await prisma.coverageArea.findFirst({
    where: { id },
    include: {
      upazillaOrThana: {
        include: {
          district: true,
        },
      },
    },
  });
  return result;
};

export const getCoverageAreaByUpazillaOrThanaId = async (
  upazillaOrThanaId: string
): Promise<CoverageArea[] | null> => {
  const result = await prisma.coverageArea.findMany({
    where: { upazillaOrThanaId },
    include: {
      upazillaOrThana: {
        include: {
          district: true,
        },
      },
    },
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
    include: {
      upazillaOrThana: {
        include: {
          district: true,
        },
      },
    },
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
  getCoverageAreaById,
  getCoverageAreaByUpazillaOrThanaId,
  updateCoverageArea,
  deleteCoverageArea,
};
