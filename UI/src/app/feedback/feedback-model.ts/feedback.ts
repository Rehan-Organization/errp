import { Employee } from './employee';

export interface Feedback {
    id?: number;
    sender: Employee;
    receiver: Employee;
    title?: String;
    description?: string;
    created_date?: Date;
    updatedDate?: Date;
}
