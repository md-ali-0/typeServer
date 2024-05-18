import { Router } from 'express';
import { StudentController } from './student.controller';

const router = Router();

router.post('/create', StudentController.createStudent);
router.get('/:id', StudentController.getSingleStudent);
router.get('/all', StudentController.getAllStudents);

export const StudentRoute = router;
