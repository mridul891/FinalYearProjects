import { uniqueid } from "../model/uniqueId.js";
import { user } from "../model/user.js";
import bcrpyt from "bcryptjs";
const saltRound = 10;
export const singupController = async (req, res) => {
  const body = req.body;

  const exisitingUser = await user.findOne({
    username: body.username,
  });
  if (exisitingUser) {
    return res.status(400).json({
      message: "User Already Exist",
    });
  }

  const hashedPassword = await bcrpyt.hash(body.password, saltRound);

  const validUser = await uniqueid.findOne({
    uniqueId: body.uniqueId,
  });
  if (!validUser) {
    return res.status(400).json({ message: "Not a Ndrf Person " });
  }
  await user.create({
    username: body.username,
    password: hashedPassword,
    uniqueId: body.uniqueId,
  });

  res.json({
    message: " user Created successfully",
  });
};
export const signinController = async (req, res) => {
  res.json({
    message: "Sign in successfull",
  });
};

export const uniqueidController = async (req, res) => {
  const body = req.body;

  const exisitingId = await uniqueid.findOne({
    uniqueId: body.uniqueid,
  });

  if (exisitingId) {
    return res.status(400).json({
      message: "Already A valid user",
    });
  }

  await uniqueid.create({
    uniqueId: body.uniqueid,
    name: body.name,
  });

  res.json({
    id: body.uniqueid,
  });
};
