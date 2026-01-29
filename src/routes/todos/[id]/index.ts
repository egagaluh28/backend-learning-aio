import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { todos } from "@/generated/db1";

export const get = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const row = await db1.todos.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        status: true,
        priority: true,
        due_date: true,
      },
    });
    res.json({ status: "success", data: row });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

export const put = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const existing = await db1.todos.findFirst({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({ error: "Todo not found" });
    }

    // const data: Partial<todos> = {
    //     title: req.body.title ?? existing.title,
    //     status: req.body.status ?? existing.status,
    //     priority: req.body.priority ?? existing.priority,
    //     due_date: req.body.due_date
    //       ? new Date(req.body.due_date)
    //       : existing.due_date,
    // };

    const result = await db1.todos.update({
      where: { id },
      data: {
        title: req.body.title ?? existing.title,
        status: req.body.status ?? existing.status,
        description: req.body.description ?? existing.description,
        priority: req.body.priority ?? existing.priority,
        due_date: req.body.due_date
          ? new Date(req.body.due_date)
          : existing.due_date,
      },
    });

    res.json({ status: "success", data: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
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
