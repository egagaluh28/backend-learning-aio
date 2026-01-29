import { Request, Response } from "express";
import { todos_status } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const statusValue = Object.values(todos_status);
    res.json({ status: "success", data: statusValue });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch status enum values" });
  }
};
