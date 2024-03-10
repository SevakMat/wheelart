import { PrismaClient, Prisma, User } from "@prisma/client";
import jwt, { SignOptions } from 'jsonwebtoken';
import config from 'config';


// import { omit } from "lodash";
// import redisClient from "../utils/connectRedis";
// import { signJwt } from "../utils/jwt";

export const excludedFields = [
  "password",
  "verified",
  "verificationCode",
  "passwordResetAt",
  "passwordResetToken",
];

const prisma = new PrismaClient();

export const createUser = async (input: Prisma.UserCreateInput) => {
  console.log("ekac", input);

  const user = await prisma.user.create({
    data: input,
    select: {
      id: true, email: true, firstName: true, active: true, emailVerified: true, lastName: true, role: true,
    }
  });
  console.log("uase", user);

  return { ...user, id: user.id.toString() }
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
  }) 
  return userDara as User;
};

// export const updateUser = async (
//   where: Partial<Prisma.UserWhereUniqueInput>,
//   data: Prisma.UserUpdateInput,
//   select?: Prisma.UserSelect
// ) => {
//   return (await prisma.user.update({ where, data, select })) as User;
// };

export const signTokens = async (user: any) => {
  // 1. Create Session
  // redisClient.set(`${user.id}`, JSON.stringify(omit(user, excludedFields)), {
  //   EX: config.get<number>("redisCacheExpiresIn") * 60,
  // });

  // 2. Create Access and Refresh tokens

  const payload = {
    userId: Number(user.id),
    userEmail: user.email
  }
  
  const access_token = jwt.sign({ payload }, config.get<string>("jwtSecretKey"), { expiresIn: '1h' });
  const refresh_token = jwt.sign({ payload }, config.get<string>("jwtRefreshSecretKey"), { expiresIn: '1d' });


  // const access_token = signJwt({ sub: user.id }, "accessTokenPrivateKey", {
  //   expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
  // });

  // const refresh_token = signJwt({ sub: user.id }, "refreshTokenPrivateKey", {
  //   expiresIn: `${config.get<number>("refreshTokenExpiresIn")}m`,
  // });

  return { access_token, refresh_token };
};
