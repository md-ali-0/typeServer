export type IUserName = {
    firstName: string;
    lastName: string;
};

export type IStudent = {
    name: IUserName;
    age: number;
    email: string;
    gender: 'male' | 'female';
    dateOfBirth?: string;
    contact?: string;
    avatar?: string;
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
};
