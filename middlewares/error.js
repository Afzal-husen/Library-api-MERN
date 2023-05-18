import { CustomError } from "../utils/customError.js";

export const errorHandler = (err, req, res, next) => {
  //page not found
  // if (res.statusCode === 404) {
  //   err = new CustomError("page not found", 404);
  // }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
  });
};
