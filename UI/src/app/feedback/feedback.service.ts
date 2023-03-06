

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { Employee } from './employee';
import { Feedback } from './feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  fetchAllFeedbacks(id:number) : Observable<Feedback[]>
  {
    return this.http.post<Feedback[]>("http://localhost:8080/emp/feedbacks",id);
  }
  removeFeedback(idi:any) : Observable<Feedback>
  {
    // let queryParams = new HttpParams();    
    // queryParams = queryParams.append("id",id);      
    return this.http.delete('http://localhost:8080/emp/deleteFeedback?id=`${idi}`');
  }

  saveFeedback(feedback: Feedback): Observable<Feedback>{
    return this.http.post<Feedback>(URLS.SAVEFEEDBACK,feedback);
  }

  getReportees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(URLS.FETCHREPORTEES);
  }
  fetchEmployee(id?:number)
  {
    return this.http.post<Employee>("http://localhost:8080/employee",id);
  }
}

