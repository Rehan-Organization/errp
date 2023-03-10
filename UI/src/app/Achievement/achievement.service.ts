import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient: HttpClient) { }

  getAllAchievement(): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>("/achievement/emp");
  }

  getPaginatedAchievement(pageNo: number, pageSize: number): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>('/achievement/paginated/' + pageNo + "/" + pageSize);
  }

  saveAchievement(achievement: Achievement): Observable<Achievement> {
    return this.httpClient.post<Achievement>('/achievement/add', achievement)
  }


  updateAchievement(achievement: Achievement): Observable<Achievement> {
    return this.httpClient.post<Achievement>('/achievement/updateAchievement/' + achievement.achievementId, achievement);
  }

  // deleteAchievement(achievement_id : any) : Observable<Achievement>{
  //   console.log(achievement_id)
  //   return this.httpClient.delete(URLS.DELETE + achievement_id)
  // }
  // edite achivement
  getAchievement(userId: number): Observable<Achievement> {
    return this.httpClient.get<Achievement>(URLS.GETACHIEVEMENT + "/" + userId);
  }

  deleteAchievement(achievement_id: any): Observable<Achievement> {
    console.log(achievement_id)
    return this.httpClient.delete(URLS.DELETE + achievement_id)
  }

  submitAchievement(achievement: Achievement): Observable<Achievement> {
    console.log("submit", achievement);
    return this.httpClient.post<Achievement>("/achievement/submit", achievement);
  }


}
