import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { todos } from "@/generated/db1";
import { authenticateToken } from "@/middlewares/auth";
import { CustomRequest } from "@/types";

export const get = [
  authenticateToken,
  async (req: CustomRequest, res: Response) => {
    const userId = req.user.id;
    try {
      const data = await db1.todos.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          status: true,
          priority: true,
          due_date: true,
          created_at: true,
          updated_at: true,
          category_id: true,
          user_id: true,
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
          users: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        where: { user_id: userId },
      });
      res.json({
        status: "success",
        data,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  },
];

export const post = [
  authenticateToken,
  async (req: CustomRequest, res: Response) => {
    try {
      const data: Partial<todos> = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        due_date: req.body.due_date ? new Date(req.body.due_date) : null,
        category_id: req.body.category_id,
        user_id: req.user.id,
      };

      const row = await db1.todos.create({
        data: data,
      });

      res.json({ status: "success", data: row });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create todo" });
    }
  },
];
