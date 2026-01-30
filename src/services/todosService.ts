import { authenticateToken } from "@/middlewares/auth";
import { CustomRequest } from "@/types";
import { db1 } from "@/utils/db1";
import type { Response } from "express";

export const getQueryTodos = [
  authenticateToken,
  async (req: CustomRequest, res: Response) => {
    const userId = req.user.id;

    const result = await db1.$queryRaw`
        SELECT 
            t.*,
            s.name as user_name
        FROM todos t
        INNER JOIN users s on t.user_id = s.id
        WHERE t.user_id = ${userId}
        `;
    res.json({ status: "success", data: result });
  },
];