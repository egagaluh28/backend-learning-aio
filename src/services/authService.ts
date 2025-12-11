import jwt from "jsonwebtoken";
import { config } from "../config";

// export function generateToken(userId: number, userRole: string) {
//   return jwt.sign({ id: userId, role: userRole }, config.jwtSecret, { expiresIn: "24h" });
// }

export function generateToken(userId: number) {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: "24h" });
}
