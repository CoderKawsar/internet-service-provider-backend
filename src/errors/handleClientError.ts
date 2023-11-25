import { Prisma } from "@prisma/client";
import { IGenericErrorMessage } from "../interfaces/error";

const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];

  let message = "";
  const statusCode = 400;

  if (error.code === "P2002") {
    const uniqueVoilatedFields = error.meta?.target;
    if (!!uniqueVoilatedFields) {
      // @ts-ignore
      message = uniqueVoilatedFields[0] + " already exists!";
    } else {
      message = "Unique field required!";
    }
    errors = [
      {
        path: "",
        message,
      },
    ];
  } else if (error.code === "P2025") {
    message = (error.meta?.cause as string) || "Record not found!";
    errors = [
      {
        path: "",
        message,
      },
    ];
  } else if (error.code === "P2003") {
    // if delete not succeeded for foreign key constraints
    if (error.message.includes("delete()` invocation:")) {
      message = "Delete failed!";
      errors = [
        {
          path: "",
          message,
        },
      ];
    }
  }

  return {
    statusCode,
    message: message,
    errorMessages: errors,
  };
};

export default handleClientError;
