import { Request, Response } from "express";
import { todos_priority, todos_status } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const priorityValues = Object.values(todos_priority);
    const statusValues = Object.values(todos_status);
    res.json({
      status: "success",
      data: { priority: priorityValues, status: statusValues },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch priority enum values" });
  }
};
