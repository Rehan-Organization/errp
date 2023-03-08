import { Component, OnInit } from '@angular/core';
import { Leaderboard } from '../leaderboard-model/leaderboard';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
    constructor() {}

    leaderboard: Leaderboard[] = [
        {
            employeeName: 'Adarsh',
            supervisorName: 'Rehan',
            points: 50
          
        },
        {
            employeeName: 'Pushkar',
            supervisorName: 'Rehan',
            points: 60
       
        },
        {
            employeeName: 'Shankar',
            supervisorName: 'Rehan',
            points: 70
          
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

    date = new Date();
    getListForMonth() {
        const first_date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        const last_date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        console.log(first_date, last_date);
        //create function to get employee list for this satart and end dates
    }

    ngOnInit() {}
}

