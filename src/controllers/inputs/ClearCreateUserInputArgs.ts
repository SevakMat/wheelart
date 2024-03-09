import { Prisma } from "@prisma/client";

export const ClearCreateUserInputArgs = (data: any) => {

  return {
    id: data?.id ?? undefined,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    password:data.password,
    role: data.role,
    emailVerified:true // need to change
  }
}