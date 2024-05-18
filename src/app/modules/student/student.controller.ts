import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await StudentService.createStudent(payload);

        res.status(201).json({
            status: true,
            massage: 'Student Created Successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getAllStudents();

        res.status(201).json({
            status: true,
            massage: 'Students Data Get Successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};
const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await StudentService.getSingleStudent(id);

        res.status(201).json({
            status: true,
            massage: 'Students Data Get Successfully',
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
};
