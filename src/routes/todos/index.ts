import { Request, Response } from "express";
import { db1 } from "@/utils/db1";
import { todos } from "@/generated/db1";
import { authenticateToken } from "@/middlewares/auth";
import { CustomRequest } from "@/types";
import { getAllTodos, createTodo } from "@/controller/todosController";
import fs from "fs";
import path from "path";


export const get = getAllTodos;
export const post = createTodo;

// export const get = [
//   authenticateToken,
//   async (req: CustomRequest, res: Response) => {
//     const userId = req.user.id;
//     try {
//       const data = await db1.todos.findMany({
//         select: {
//           id: true,
//           title: true,
//           description: true,
//           status: true,
//           priority: true,
//           due_date: true,
//           created_at: true,
//           updated_at: true,
//           category_id: true,
//           user_id: true,
//           categories: {
//             select: {
//               id: true,
//               name: true,
//             },
//           },
//           users: {
//             select: {
//               id: true,
//               name: true,
//               email: true,
//             },
//           },
//         },
//         where: { user_id: userId },
//       });
//       res.json({
//         status: "success",
//         data,
//       });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch todos" });
//     }
//   },
// ];

// export const post = [
//   authenticateToken,
//   async (req: CustomRequest, res: Response) => {
//     try {
//       const userId = req.user.id;
//       let filePath = null;

//       if (req.files && req.files.file_upload) {
//         const file = req.files.file_upload as any;
//         const uploadDir = path.join(process.cwd(), "uploads");

//         if (!fs.existsSync(uploadDir)) {
//           fs.mkdirSync(uploadDir, { recursive: true });
//         }

//         const fileName = `${Date.now()}-${file.name}`;
//         const fullPath = path.join(uploadDir, fileName);

//         await file.mv(fullPath);
//         filePath = `../uploads/${fileName}`;
//       }

//       const row = await db1.todos.create({
//         data: {
//           title: req.body.title,
//           description: req.body.description,
//           status: req.body.status,
//           file_upload: filePath,
//           user_id: userId,
//         },
//       });

//       res.json({ status: "success", data: row });
//     } catch (error) {
//       console.error("Error creating todo:", error);
//       res.status(500).json({ error: "Failed to create todo" });
//     }
//   },
// ];
