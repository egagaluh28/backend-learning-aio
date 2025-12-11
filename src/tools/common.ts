import { Response } from "express";

function apiOk(res: Response, data: any, message: string) {
  return res.status(200).json({
    success: true,
    status: 200,
    message,
    data,
  });
}

function apiError(res: Response, message: string, code: number) {
  return res.status(code).json({
    success: false,
    status: code,
    error: {
      message: message,
    },
  });
}

export { apiOk, apiError };
