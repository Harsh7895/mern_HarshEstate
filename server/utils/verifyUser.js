import { ErrorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    return next(ErrorHandler(403, "Not authorized")); // Corrected typo in error message
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return next(ErrorHandler(403, "Forbidden"));
  }
};
