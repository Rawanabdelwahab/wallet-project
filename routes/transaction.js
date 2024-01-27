import { Router } from "express";
import { get, post } from "../controllers/transaction.js";
const router =new Router()
router.get('/transaction',get)
router.post('/transaction',post)
export default router