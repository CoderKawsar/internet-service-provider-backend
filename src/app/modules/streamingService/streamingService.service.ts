import { StreamingService } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const addStreamingService = async (
  payload: StreamingService
): Promise<StreamingService> => {
  const result = await prisma.streamingService.create({
    data: payload,
  });
  return result;
};

export const getAllStreamingServices = async (): Promise<
  StreamingService[]
> => {
  const result = await prisma.streamingService.findMany({});
  return result;
};

export const getStreamingService = async (
  id: string
): Promise<StreamingService | null> => {
  const result = await prisma.streamingService.findFirst({
    where: { id },
  });
  return result;
};

export const updateStreamingService = async (
  id: string,
  payload: Partial<StreamingService>
): Promise<StreamingService> => {
  const result = await prisma.streamingService.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const deleteStreamingService = async (
  id: string
): Promise<StreamingService> => {
  const result = await prisma.streamingService.delete({
    where: {
      id,
    },
  });
  return result;
};

export const StreamingServiceService = {
  addStreamingService,
  getAllStreamingServices,
  getStreamingService,
  updateStreamingService,
  deleteStreamingService,
};
