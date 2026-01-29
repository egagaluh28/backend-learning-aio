import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { categories } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const data = await db1.categories.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
        todos: true,
        users: true,
        user_id: true,
      },
    });
    res.json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const post = async (req: Request, res: Response) => {
  try {
    const data: Partial<categories> = {
      name: req.body.name,
    };

    const row = await db1.categories.create({
      data: data,
    });

    res.json({ status: "success", data: row });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
