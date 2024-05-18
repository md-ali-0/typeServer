import { Schema, model } from 'mongoose';
import { IStudent, IUserName } from './student.interface';

const UserNameSchema = new Schema<IUserName>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    {
        versionKey: false,
    },
);

const StudentSchema = new Schema<IStudent>(
    {
        name: UserNameSchema,
        age: { type: Number, required: true },
        email: { type: String, required: true },
        gender: { type: String, enum: ['male', 'female'], required: true },
        dateOfBirth: { type: String },
        contact: { type: String },
        avatar: { type: String },
        bloodGroup: {
            type: String,
            enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        },
        presentAddress: { type: String },
    },
    {
        versionKey: false,
    },
);

export const Student = model<IStudent>('Student', StudentSchema);
