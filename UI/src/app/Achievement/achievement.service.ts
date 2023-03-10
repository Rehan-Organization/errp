import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';
import {URLS} from '../constants/urls.contants'

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
constructor(private httpClient : HttpClient) { }

   getAllAchievement() : Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>(URLS.GETALLACHIEVEMENT);
  }

  getPaginatedAchievement(pageNo:number,pageSize:number):Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>(URLS.PAGINATEDACHIEVEMENT+pageNo+"/"+pageSize);
  }

  postAchievement(achievement : Achievement) : Observable<Achievement>{
    return this.httpClient.post<Achievement>(URLS.POSTACHIEVEMENT,achievement)
  } 
  getAchievement(userId:number) : Observable<Achievement> {
    return this.httpClient.get<Achievement>(URLS.GETACHIEVEMENT+"/"+userId);
  }
  deleteAchievement(achievement_id : any) : Observable<Achievement>{
    console.log(achievement_id)
    return this.httpClient.delete(URLS.DELETE + achievement_id)
  } 
}
