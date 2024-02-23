import { Router } from "express";
import { post} from '../controllers/code.js'
const router = new Router();
 router.post('/code', post)
// router.get('/code', get)
export default router 