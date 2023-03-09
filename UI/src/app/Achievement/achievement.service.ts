import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { Achievement } from './achievement';


@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  // getAchievement() {
  //     throw new Error('Method not implemented.');
  // }

  constructor(private httpClient : HttpClient) { }

   getAllAchievement() : Observable<Achievement[]>{
   
    
    return this.httpClient.get<Achievement[]>("/achievement/emp");
  }

  postAchievement(achievement : Achievement) : Observable<Achievement>{
    console.log(achievement);
    return this.httpClient.post<Achievement>('/achievement/add',achievement)
  } 

  deleteAchievement(achievement_id : any) : Observable<Achievement>{
    console.log(achievement_id)
    return this.httpClient.delete(URLS.DELETE + achievement_id)
  }
  // edite achivement
  getAchievement(userId:number) : Observable<Achievement> {
    return this.httpClient.get<Achievement>(URLS.GETACHIEVEMENT+"/"+userId);
  }
}
