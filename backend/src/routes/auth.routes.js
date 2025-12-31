import { Router } from "express";
import { userRegister } from "../controllers/auth.controller.js";

const authRoutes = Router()

authRoutes.post('/user-register', userRegister);

export default authRoutes;