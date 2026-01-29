import { users as User } from "@/generated/db1";
import type { Request } from "express";

export interface CustomRequest extends Request {
  user: User;

}
