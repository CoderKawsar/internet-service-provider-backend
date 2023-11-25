import prisma from "../shared/prisma";

export const generateCustomerId = async (coverageAreaId: string) => {
  // extracting the last customer present in the database
  const lastCustomer = await prisma.customer.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });

  // extracting the coverage upazillaOrThana from given coverageAreaId
  const upazilla = await prisma.coverageArea.findFirst({
    where: {
      id: coverageAreaId,
    },
    select: {
      upazillaOrThana: {
        select: {
          upazillaOrThana: true,
        },
      },
    },
  });
  const upazillaOrThana = upazilla?.upazillaOrThana.upazillaOrThana;

  // if there is no customer generate customer id initiated with 00001
  if (!lastCustomer) {
    return upazillaOrThana + "-" + "000001";
  }

  // if there is last customer, generate customer id
  const lastCustomerId = lastCustomer.customerId.split("-")[1];
  if (lastCustomerId) {
    const numPart = parseInt(lastCustomerId) + 1;
    return (
      String(upazillaOrThana).replace(/\s/g, "").toLowerCase() +
      "-" +
      String(numPart).padStart(6, "0")
    );
  }
};
