import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AwardType } from './awardtype';
import { Employee } from './employee';
import { EmployeeAward } from './employeeaward';

@Injectable({
  providedIn: 'root'
})
export class AwardService {

  constructor(private httpClient: HttpClient) {

  }


  getAwardTypes(): Observable<AwardType[]> {
    return this.httpClient.get<AwardType[]>("/awardtypes");
  }

  getAllUsers(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>("/users");
  }

  getAllEmployeeAwards(): Observable<EmployeeAward[]> {
    return this.httpClient.get<EmployeeAward[]>("/employeeaward");
  }
}
