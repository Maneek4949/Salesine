import User from "../Models/user_model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(404)
        .json({ Message: "Enter Personal Details and start journey with us." });
    }

    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await User.findOne({ name });
    if (!newUser) {
      return res.status(401).json({ Message: "Something Went Wrong!!" });
    }

    if (user) {
      return res.status(401).json({ Message: "User already Exists" });
    }
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();

    return res.status(200).json({ newUser });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    console.log(name, password);
    if (!name || !password) {
      return res.status(404).json({ Message: "Enter Personal Details and start journey with us." });
    }

    const user = await User.findOne({ name });

    if (!user) {
      return res.status(404).json({ Message: "User Not Found" });
    }

    const confirmPass = bcrypt.compareSync(password, user.password);

    if (!confirmPass) {
      return res.status(403).json({ Message: "Invalid Details" });
    }

    res.status(200).json({ Message: "Login Success" });
  } catch (err) {
    next(err);
  }
};
