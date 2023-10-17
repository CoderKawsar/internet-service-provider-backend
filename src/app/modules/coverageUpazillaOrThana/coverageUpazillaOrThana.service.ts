import { CoverageUpazillaOrThana } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addCoverageUpazillaOrThana = async (
  payload: CoverageUpazillaOrThana
): Promise<CoverageUpazillaOrThana> => {
  const result = await prisma.coverageUpazillaOrThana.create({
    data: payload,
  });
  return result;
};

export const getAllCoverageUpazillaOrThanas = async (): Promise<
  CoverageUpazillaOrThana[]
> => {
  const result = await prisma.coverageUpazillaOrThana.findMany({});
  return result;
};

export const getCoverageUpazillaOrThana = async (
  id: string
): Promise<CoverageUpazillaOrThana | null> => {
  const result = await prisma.coverageUpazillaOrThana.findFirst({
    where: { id },
  });
  return result;
};

export const updateCoverageUpazillaOrThana = async (
  id: string,
  payload: Partial<CoverageUpazillaOrThana>
): Promise<CoverageUpazillaOrThana> => {
  const result = await prisma.coverageUpazillaOrThana.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteCoverageUpazillaOrThana = async (
  id: string
): Promise<CoverageUpazillaOrThana> => {
  const result = await prisma.coverageUpazillaOrThana.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CoverageUpazillaOrThanaService = {
  addCoverageUpazillaOrThana,
  getAllCoverageUpazillaOrThanas,
  getCoverageUpazillaOrThana,
  updateCoverageUpazillaOrThana,
  deleteCoverageUpazillaOrThana,
};
