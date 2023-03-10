import { Component, OnInit } from '@angular/core';
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

    typeCheck: Boolean = false;
    startDate: Date;
    endDate: Date;
    date = new Date();

    leaderboardList: Leaderboard[] = [];

    leaderboard: Leaderboard[] = [
        {
            employeeName: 'Adarsh',
            supervisorName: 'Rehan',
            points: 50,
        },
        {
            employeeName: 'Pushkar',
            supervisorName: 'Rehan',
            points: 60,
        },
        {
            employeeName: 'Shankar',
            supervisorName: 'Rehan',
            points: 70,
        },
        {
            employeeName: 'Vishal',
            supervisorName: 'Rehan',
            points: 80,
        },
        {
            employeeName: 'Shrikant',
            supervisorName: 'Rehan',
            points: 90,
        },
    ];

    forMonth() {
        this.typeCheck = false;
        const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        const endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        const today = new Date();
        if (today < endDate) {
            this.getLeaderboardList(startDate, today);
        } else {
            this.getLeaderboardList(startDate, endDate);
        }
    }

    forQuarter() {
        this.typeCheck = false;
        const quarter = Math.floor(this.date.getMonth() / 3);
        const startDate = new Date(this.date.getFullYear(), quarter * 3, 1);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);
        const today = new Date();
        if (today < endDate) {
            this.getLeaderboardList(startDate, today);
        } else {
            this.getLeaderboardList(startDate, endDate);
        }
    }

    forHalfYear() {
        this.typeCheck = false;
        const startDate = new Date(new Date().getFullYear(), 0, 1);
        const endDate = new Date(new Date().getFullYear(), 11, 31);
        const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
        const today = new Date();
        if (today < midDate) {
            this.getLeaderboardList(startDate, today);
        } else {
            this.getLeaderboardList(startDate, midDate);
        }
    }

    forYear() {
        this.typeCheck = false;
        const startDate = new Date(new Date().getFullYear(), 0, 1);
        const endDate = new Date(new Date().getFullYear(), 11, 31);
        const today = new Date();
        if (today < endDate) {
            this.getLeaderboardList(startDate, today);
        } else {
            this.getLeaderboardList(startDate, endDate);
        }
    }

    forCustomDate() {
        this.typeCheck = true;
    }

    customDate() {
        if (this.startDate == null && this.endDate == null) {
            this.toasterService.showErrorToast('Dates cant be empty');
        } else if (this.startDate > this.endDate) {
            this.toasterService.showErrorToast('Start date cant be greater than end date');
        } else {
            this.getLeaderboardList(this.startDate, this.endDate);
        }
    }

    getLeaderboardList(startDate: Date, endDate: Date) {
        console.log(startDate, endDate);
        // this.leaderboardService.getLeaderboardList(first_date, last_date).subscribe(
        //     (leaderboardList) => {
        //         this.leaderboardList = leaderboardList;
        //     },
        //     (err) => {
        //         console.log(err);
        //     }
        // );
    }

    ngOnInit() {
        this.forMonth();
    }
}

