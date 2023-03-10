import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achievement } from './achievement';
import { URLS } from '../constants/urls.contants'

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient: HttpClient) { }

  // getAllAchievement(): Observable<Achievement[]> {
  //   return this.httpClient.get<Achievement[]>("/achievement/emp");
  // }

  getPaginatedAchievement(pageNo: number, pageSize: number): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(URLS.GET_PAGINATED + '/' + pageNo + "/" + pageSize);
  }

  saveAchievement(achievement: Achievement): Observable<Achievement> {
    return this.httpClient.post<Achievement>(URLS.SAVE, achievement)
  }


  updateAchievement(achievement: Achievement): Observable<Achievement> {
    return this.httpClient.post<Achievement>(URLS.UPDATE + '/' + achievement.achievementId, achievement);
  }

  getAchievement(userId: number): Observable<Achievement> {
    return this.httpClient.get<Achievement>(URLS.GET + "/" + userId);
  }

  deleteAchievement(achievement_id: any): Observable<Achievement> {
    console.log(achievement_id)
    return this.httpClient.delete(URLS.DELETE + '/' + achievement_id)
  }

  submitAchievement(achievement: Achievement): Observable<Achievement> {
    console.log("submit", achievement);
    return this.httpClient.post<Achievement>(URLS.SUBMIT, achievement);
  }


}
