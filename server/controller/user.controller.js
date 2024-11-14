import { uniqueid } from "../model/uniqueId.js";
import { user } from "../model/user.js";
import bcrypt from "bcryptjs";

const saltRound = 10;
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

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

  const validUser = await uniqueid.findOne({
    uniqueId: body.uniqueId,
  });

  if (!validUser) {
    return res.status(400).json({ message: "Not a Valid Member of NDRF" });
  }
  const hashedPassword = await bcrypt.hashSync(body.password, saltRound);

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
  const body = req.body;

  const userPresent = await user.findOne({
    username: body.username,
  });

  if (!userPresent) {
    return res
      .status(400)
      .json({ message: " User is not Present please Register " });
  }

  bcrypt.compare(body.password, userPresent.password, (err, isMatch) => {
    if (err) throw err;
    if (isMatch) {
      return res.status(200).json({
        message: "Sign in Successfull",
      });
    } else {
      return res.status(400).json({
        message: "Password Incorrect",
      });
    }
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
