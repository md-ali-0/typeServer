import { Router } from "express";
import { StudentRoute } from "../modules/student/student.route";

const router = Router()

router.use('/student', StudentRoute)

export default router