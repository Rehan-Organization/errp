import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient : HttpClient) { }

  getAllAchievement(userId:number) : Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>('/achievement/'+userId)
  }

  postAchievement(achievement : Achievement) : Observable<Achievement>{
    return this.httpClient.post<Achievement>('/achievement',achievement)
  } 

  deleteAchievement(achievement_id : any) : Observable<Achievement>{
    console.log(achievement_id)
    return this.httpClient.delete(URLS.DELETE + achievement_id)
  }
}
