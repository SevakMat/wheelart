import { Request, Response } from "express";
import { updateUser } from "../../services/user.service";
import { toInt } from "../../utils/stringToNumber";

export const UpdateUserHandler = async (req: Request, res: Response) => {
  let { userId } = req.params;
  const id = toInt(userId);

  try {
    const updatedUser = await updateUser(req.body, id);

    res.status(200).json({
      user: updatedUser,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      user: null,
      status: "faild",
      message: "Something went wrong ",
    });
  }
};
