import { Types } from 'mongoose';
import { IStudent } from './student.interface';
import { Student } from './student.model';

const createStudent = async (payload: IStudent): Promise<IStudent | null> => {
    const student = await Student.create(payload);
    return student;
};

const getAllStudents = async (): Promise<IStudent[] | null> => {
    const student = await Student.find();
    return student;
};
const getSingleStudent = async (id: string): Promise<IStudent | null> => {
    const student = await Student.findOne({ _id: new Types.ObjectId(id) });
    return student;
};

export const StudentService = {
    createStudent,
    getAllStudents,
    getSingleStudent,
};
