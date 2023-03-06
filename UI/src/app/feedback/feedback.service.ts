

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

  saveFeedback(feedback: Feedback): Observable<Feedback>{
    return this.http.post<Feedback>(URLS.SAVEFEEDBACK,feedback);
  }

  getReportees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(URLS.FETCHREPORTEES);
  }
}

