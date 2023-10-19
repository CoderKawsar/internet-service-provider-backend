import { StreamingServicesForPackage } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addOneIntoDB = async (
  payload: StreamingServicesForPackage
): Promise<StreamingServicesForPackage> => {
  const result = await prisma.streamingServicesForPackage.create({
    data: payload,
  });
  return result;
};

export const getAllFromDB = async (): Promise<
  StreamingServicesForPackage[]
> => {
  const result = await prisma.streamingServicesForPackage.findMany({
    include: {
      streamingService: true,
    },
  });
  return result;
};

export const getSingleFromDB = async (
  id: string
): Promise<StreamingServicesForPackage | null> => {
  const result = await prisma.streamingServicesForPackage.findFirst({
    where: { id },
  });
  return result;
};

export const updateOneIntoDB = async (
  id: string,
  payload: Partial<StreamingServicesForPackage>
): Promise<StreamingServicesForPackage> => {
  const result = await prisma.streamingServicesForPackage.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteOneFromDB = async (
  id: string
): Promise<StreamingServicesForPackage> => {
  const result = await prisma.streamingServicesForPackage.delete({
    where: {
      id,
    },
  });
  return result;
};

export const StreamingServicesForPackagesService = {
  addOneIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneFromDB,
};
