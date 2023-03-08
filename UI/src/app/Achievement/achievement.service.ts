import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';
import {URLS} from '../constants/urls.contants'

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  // getAchievement() {
  //     throw new Error('Method not implemented.');
  // }

  constructor(private httpClient : HttpClient) { }

  getAllAchievement(userId:number) : Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>(URLS.FETCHACHIEVEMENTS+"/"+userId);
  }

  postAchievement(achievement : Achievement) : Observable<Achievement>{
    return this.httpClient.post<Achievement>('/achievement',achievement)
  } 

  // edite achivement
  getAchievement(userId:number) : Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(URLS.GETACHIEVEMENT+"/"+userId);
  }
}
