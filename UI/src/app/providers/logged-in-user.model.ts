export interface LoggedInUser {
    employeeId: number;
    employeeName: string;
    username: string;
    authorities: { authority: string }[];
}
