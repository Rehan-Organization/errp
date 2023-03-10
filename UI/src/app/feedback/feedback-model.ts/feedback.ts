import { Employee } from './employee';

export interface Feedback {
    id?: number;
    senderId: Employee;
    receiverId: Employee;
    title?: String;
    description?: string;
    created_date?: Date;
    updatedDate?: Date;
}
