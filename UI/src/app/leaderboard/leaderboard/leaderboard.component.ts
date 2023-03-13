import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastService } from 'src/app/errp-service/toast.service';
import { Leaderboard } from '../leaderboard-model/leaderboard';
import { LeaderboardService } from '../leaderboard-providers/leaderboard.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
    constructor(
        private leaderboardService: LeaderboardService,
        private toasterService: ToastService
    ) {}

    isCustomDate: Boolean = false;
    startDate: Date;
    endDate: Date;
    customStartDate: Date;
    customEndDate: Date;
    date = new Date();
    pageNumber: number = 0;
    pageSize: number = 50;

    leaderboardList: Leaderboard[] = [];

    forMonth() {
        this.statusProvider(1);
        this.startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.getLeaderboardList(false, null);
    }

    forQuarter() {
        this.statusProvider(1);
        const quarter = Math.floor(this.date.getMonth() / 3);
        this.startDate = new Date(this.date.getFullYear(), quarter * 3, 1);
        this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 3, 0);
        this.getLeaderboardList(false, null);
    }

    forHalfYear() {
        this.statusProvider(1);
        this.startDate = new Date(new Date().getFullYear(), 0, 1);
        const midDate = new Date(new Date().getFullYear(), 11, 31);
        this.endDate = new Date((this.startDate.getTime() + midDate.getTime()) / 2);
        this.getLeaderboardList(false, null);
    }

    forYear() {
        this.statusProvider(1);
        this.startDate = new Date(new Date().getFullYear(), 0, 1);
        this.endDate = new Date(new Date().getFullYear(), 11, 31);
        this.getLeaderboardList(false, null);
    }

    forCustomDate() {
        this.statusProvider(0);
    }

    customDate() {
        this.leaderboardList = [];
        if (this.customStartDate == null && this.customEndDate == null) {
            this.toasterService.showErrorToast('Dates cant be empty');
        } else if (this.customStartDate > this.customEndDate) {
            this.toasterService.showErrorToast('Start date cant be greater than end date');
        } else {
            console.log(this.customStartDate);
            this.startDate = this.customStartDate;
            this.endDate = this.customEndDate;
            this.getLeaderboardList(false, null);
        }
    }

    onIonInfinite(ev: Event) {
        console.log(this.startDate, this.endDate);
        this.getLeaderboardList(true, ev);
    }

    getLeaderboardList(isFirstLoad: boolean, event: any) {
        this.leaderboardService
            .getLeaderboardList(
                this.pageNumber,
                this.pageSize,
                moment(this.startDate).format('yyyy-MM-DD'),
                moment(this.endDate).format('yyyy-MM-DD')
            )
            .subscribe(
                (data) => {
                  this.leaderboardList = this.leaderboardList.concat(...data);
                    
                    if (isFirstLoad) {
                        event.target.complete();
                    }
                    this.pageNumber++;
                },
                (err) => {
                    this.toasterService.showErrorToast('Failed to load data');
                }
            );
    }

    statusProvider(status: number) {
        switch (status) {
            case 0:
                (this.leaderboardList = []), (this.pageNumber = 0), (this.isCustomDate = true);
                break;

            case 1:
                (this.leaderboardList = []), (this.isCustomDate = false), (this.pageNumber = 0);
                break;
            default :
                (this.toasterService.showErrorToast("Something went wrong!"));
                break;
        }
    }

    ngOnInit() {
        this.forMonth();
    }
}

