import User from "../models/User.js";
import HttpError from "../models/HttpError.js";

import { validationResult } from "express-validator";

// these will all perform asynchronous operations

const signUpUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid entries, please try again.", 422);
    return next(error);
  }

  const { name, email, password} = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({email: email});
  } catch (err) {
    const error = new HttpError("Something went wrong, please try again.", 500);
    return(error);
  }

  if(existingUser) return next(new HttpError("This email is already associated with another user.", 422));

  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }
};

const logInUser = async (req, res) => {
  res.send("user log in");
};

const updateUser = async (req, res) => {
  res.send("user update");
};

export { signUpUser, logInUser, updateUser };
