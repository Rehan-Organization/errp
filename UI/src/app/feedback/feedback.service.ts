import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { Employee } from './feedback-model.ts/employee';
import { Feedback } from './feedback-model.ts/feedback';
@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    updateadd: number = 0;
    constructor(private http: HttpClient) {}

    fetchAllFeedbacks(isMyFeedbacks: boolean): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(URLS.FETCHFEEDBACKS+"/" + isMyFeedbacks);
    }
    // removeFeedback(feedbackId: any): Observable<Feedback> {
    //     return this.http.delete(URLS.DELETEFEEDBACK + feedbackId);
    // }

    saveFeedback(feedback: Feedback): Observable<Feedback> {
        return this.http.post<Feedback>(URLS.SAVEFEEDBACK, feedback);
    }

    getReportees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(URLS.FETCHREPORTEES);
    }
    fetchEmployee(id?: number) {
        return this.http.post<Employee>('http://localhost:8080/employee', id);
    }
    fetchFeedback(id:number){
      return this.http.get<Feedback>(URLS.FETCHFEEDBACK+'/'+id); 
    }
    updateFeedback(feedback:Feedback,id:number){
        return this.http.put<Feedback>(URLS.UPDATEFEEDBACK+'/'+id,feedback);
    }
}
