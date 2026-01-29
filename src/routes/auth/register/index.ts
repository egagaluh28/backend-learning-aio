import { config } from "@/config";
import { db1 } from "@/utils/db1";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const post = async (req: Request, res: Response) => {
  const { name, email, password_hash } = req.body;

  const existingUser = await db1.users.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = await db1.users.create({
    data: {
      name,
      email,
      password_hash,
    },
  });

  const userCopy = { ...newUser };
  delete userCopy.password_hash;

  const token = jwt.sign({ user: userCopy }, config.jwtSecret, {
    expiresIn: "1h",
  });

  return res.json({ status: "success", token, user: userCopy });
};
