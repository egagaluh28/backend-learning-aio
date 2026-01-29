import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { categories } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const row = await db1.categories.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        created_at: true,
        todos: true,
        users: true,
        user_id: true,
      },
    });
    res.json({ status: "success", data: row });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
};

export const put = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await db1.categories.findFirst({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({ error: "Category not found" });
    }

    const result = await db1.categories.update({
      where: { id },
      data: {
        name: req.body.name ?? existing.name,
      },
    });

    res.json({ status: "success", data: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = await db1.todos.delete({
      where: { id },
    });
    res.json({ status: "success", data });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
