import jwt from "jsonwebtoken";

interface JWTTokens {
  access_token: string;
  refresh_token: string;
}
export const generateJWTTokens = async (payload: any): Promise<JWTTokens> => {
  console.log(
    "process.env.JWT_REFRESH_SECRET_KEY",
    process.env.JWT_REFRESH_SECRET_KEY
  );

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
