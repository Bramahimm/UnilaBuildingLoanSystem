import express from "express";
import authController from "../controllers/auth.controller";
import loginController from "../controllers/login.controller";

const router = express.Router();

router.post("/cekdatabase", authController.cekdatabase);
router.post("/login", loginController.login);

export default router;
