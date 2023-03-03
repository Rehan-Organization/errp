import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient : HttpClient) { }

  getAllAchievement(userId:number) : Observable<Achievement[]>{
    return this.httpClient.get<Achievement[]>('/achievement/'+userId)
  }
}
