import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/app/constants/urls.contants';
import { Leaderboard } from '../leaderboard-model/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) { }


       getLeaderboardList(startDate : Date, endDate : Date): Observable<Leaderboard[]>
       {
               return this.http.get<Leaderboard[]>(URLS.GET_LEADERBOARD_LIST);
       }


}
