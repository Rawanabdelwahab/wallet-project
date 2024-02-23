import { Router } from "express"
import { register } from "../controllers/register.js"
const router = new Router()
router.post('/auth/register', register)
//router.post('/code', post)
//router.get('/code', get)
export default router