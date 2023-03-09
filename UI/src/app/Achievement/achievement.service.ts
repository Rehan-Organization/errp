import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient : HttpClient) { }

  getAllAchievement() : Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>('/achievement/emp')
    //use constants here 
  }

  getPaginatedAchievement(pageNo:number,pageSize:number):Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>('/achievement/paginated/'+pageNo+"/"+pageSize);
  }

  postAchievement(achievement : Achievement) : Observable<Achievement>{
    return this.httpClient.post<Achievement>('/achievement',achievement)
  } 
}
