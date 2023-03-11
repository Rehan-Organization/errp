import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { URLS } from '../constants/urls.contants';
import { LoggedInUserContext } from '../providers/logged-in-user-context.service';
import { Achievement } from './achievement';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private httpClient: HttpClient,
    private userContext: LoggedInUserContext) { }



  getPaginatedAchievement(pageNo: number, pageSize: number): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(URLS.GET_PAGINATED + '/' + pageNo + "/" + pageSize);
  }

  saveAchievement(achievement: Achievement): Observable<Achievement> {
    
    achievement.employeeId = this.userContext.getLoggedInUser()?.employeeId;
    return this.httpClient.post<Achievement>(URLS.SAVE, achievement)
  }


  updateAchievement(achievement: Achievement): Observable<Achievement> {

    achievement.employeeId = this.userContext.getLoggedInUser()?.employeeId;
    return this.httpClient.put<Achievement>(URLS.UPDATE, achievement);
  }

  getAchievement(userId: number): Observable<Achievement> {
    return this.httpClient.get<Achievement>(URLS.GET + "/" + userId);
  }

  deleteAchievement(achievement_id: any): Observable<Achievement> {
    return this.httpClient.delete(URLS.DELETE + '/' + achievement_id)
  }

  submitAchievement(achievement: Achievement): Observable<Achievement> {

    achievement.employeeId = this.userContext.getLoggedInUser()?.employeeId;
    return this.httpClient.post<Achievement>(URLS.SUBMIT, achievement);
  }


}
