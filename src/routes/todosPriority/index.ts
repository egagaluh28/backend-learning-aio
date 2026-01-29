import { Request, Response } from "express";
import { todos_priority } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const priorityValues = Object.values(todos_priority);
    res.json({ status: "success", data: priorityValues });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch priority enum values" });
  }
};
