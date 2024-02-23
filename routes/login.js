import { Router } from "express";
import { checkLogin } from "../controllers/login.js";
const router = new Router()
router.post('/auth/login', checkLogin)
export default router;