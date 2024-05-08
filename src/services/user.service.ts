import { PrismaClient, Prisma, User } from "@prisma/client";
import jwt, { SignOptions } from "jsonwebtoken";
import config from "config";

export const excludedFields = [
  "password",
  "verified",
  "verificationCode",
  "passwordResetAt",
  "passwordResetToken",
];

const prisma = new PrismaClient();

export const createUser = async (input: Prisma.UserCreateInput) => {
  const user = await prisma.user.create({
    data: input,
    select: {
      id: true,
      email: true,
      firstName: true,
      active: true,
      emailVerified: true,
      lastName: true,
      role: true,
      googleId: true,
    },
  });

  return { ...user, id: user.id.toString() };
};

export const updateUser = async (
  input: Prisma.UserUpdateInput,
  userId: number
): Promise<any> => {
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...input,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        active: true,
        emailVerified: true,
        lastName: true,
        role: true,
        googleId: true,
      },
    });

    return { ...user, id: user.id.toString() };
  } catch (err) {
    throw err;
  }
};

// export const findUser = async (
//   where: Partial<Prisma.UserCreateInput>,
//   select?: Prisma.UserSelect
// ) => {
//   return (await prisma.user.findFirst({
//     where,
//     select,
//   })) as User;
// };

export const findUniqueUser = async (
  where: Prisma.UserWhereUniqueInput,
  select?: Prisma.UserSelect
) => {
  const userDara = await prisma.user.findUnique({
    where,
    select,
  });
  return userDara as User;
};

export const signTokens = async (user: any) => {
  const payload = {
    userId: Number(user.id),
    userEmail: user.email,
  };

  const access_token = jwt.sign(
    { payload },
    process.env.JWT_SECRET_KEY as string,

    { expiresIn: "1h" }
  );
  const refresh_token = jwt.sign(
    { payload },
    process.env.JWT_REFRESH_SECRET_KEY as string,

    { expiresIn: "1d" }
  );

  return { access_token, refresh_token };
};

export const transformToLineItems = (products: any[]) => {
  const lineItems = products.map((product) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: product.rimModel ? product.rimModel : product.marka, // Use rimModel as the product name
          images: [product.imageUrl], // Use imageUrl as the product image
        },
        unit_amount: Math.round(product.price * 100), // Convert price to cents
      },
      quantity: 1, // Use count as the quantity
    };
  });

  return lineItems;
};

export const updateUserVerificationCode = async (
  input: Prisma.UserUpdateInput,
  email: string
): Promise<any> => {
  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        ...input,
      },
    });

    return { ...user, id: user.id.toString() };
  } catch (err) {
    throw err;
  }
};
