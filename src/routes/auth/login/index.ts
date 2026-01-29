import { config } from "@/config";
import { db1 } from "@/utils/db1";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const post = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await db1.users.findFirst({
    where: {
      email: username,
    },
  });

  if (!user) {
    return res.status(401).json({ error: "user not found" });
  }

  const userCopy = { ...user };
  delete userCopy.password_hash;

  const token = jwt.sign({ user: userCopy }, config.jwtSecret, {
    expiresIn: "1h",
  });

  return res.json({ status: "success", token, user: userCopy });
};


