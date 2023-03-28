import { Router } from "express";
import { login, signUp } from "../Controllers/auth-controllers.js";

const userRoutes = Router();
userRoutes.post("/login", login);
userRoutes.post("/signup", signUp);

export default userRoutes;
