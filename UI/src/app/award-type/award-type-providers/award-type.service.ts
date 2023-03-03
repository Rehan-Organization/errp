import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from 'src/app/constants/urls.contants';
import { AwardType } from '../award-type-model/award-type';

@Injectable({
    providedIn: 'root',
})
export class AwardTypeService {

    constructor(private http: HttpClient) { }

    getAwardTypeList(): Observable<AwardType[]> {
        return this.http.get<AwardType[]>(URLS.ALL_AWARD_LIST);
    }
    saveAwardType(awardtype: AwardType): Observable<AwardType> {
        return this.http.post(URLS.NEW_AWARD_TYPE, awardtype);
    }

    deactivateAwardType(id:any, award: AwardType): Observable<AwardType> {
       return this.http.put(URLS.DEACTIVATE_AWARD_TYPE+id,award);
 }
}

