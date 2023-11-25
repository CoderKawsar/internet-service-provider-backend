import { Request, Response, Router } from "express";
import prisma from "../../../shared/prisma";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { generateCustomerId } from "../../../helpers/common";

const testCreate = async (payload: any) => {
  const result = await prisma.test.create({
    data: payload,
  });
  return result;
};

const testGet = async () => {
  const result = await generateCustomerId(
    "745a471a-1a14-4ac4-abef-567b8c687269"
  );
  return result;
};

const testController = async (req: Request, res: Response) => {
  const result = await testGet();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Successfully created test data",
    data: result,
  });
};

const router = Router();

// router.post("/", testController);
router.get("/", testController);

export const testRoutes = router;
