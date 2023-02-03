import HttpError from "../models/HttpError.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(new HttpError("Authentication failed.", 401));
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    return next(new HttpError("Unqiue authentication failed...", 401));
  }
};

export default auth;
