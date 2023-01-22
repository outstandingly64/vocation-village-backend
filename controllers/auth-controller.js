import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import HttpError from "../models/HttpError.js";

import { validationResult } from "express-validator";

// these will all perform asynchronous operations

const signUpUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid entries, please try again.", 422);
    return next(error);
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Something went wrong, please try again.", 500);
    return error;
  }

  if (existingUser)
    return next(
      new HttpError("This email is already associated with another user.", 422)
    );

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong while processing data, please try again",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Sign up request failed to process.", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_TOKEN,
      { expiresIn: "1hr" }
    );
  } catch (err) {
    const error = new HttpError(
      "An error has occurred contacting server, please try again",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({
      user: {
        email,
        name,
        lastName: createdUser.lastName,
        location: createdUser.location,
      },
      token,
      location: createdUser.location,
    });
};

const logInUser = async (req, res) => {
  res.send("user log in");
};

const updateUser = async (req, res) => {
  res.send("user update");
};

export { signUpUser, logInUser, updateUser };
