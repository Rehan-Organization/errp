import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
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
    // isFirstLoad : Boolean = false;
    startDate: Date;
    endDate: Date;
    customStartDate: Date;
    customEndDate: Date;
    date = new Date();
    pageNumber : number = 0;
    pageSize : number = 10;

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
        this.pageNumber = 0;
        const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        const endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        const today = new Date();
        if (today < endDate) {
            this.startDate = startDate;
            this.endDate = today;
        } else {
            this.startDate = startDate;
            this.endDate = endDate;
        }
      
    }

    forQuarter() {
        this.typeCheck = false;
        this.pageNumber = 0;
        const quarter = Math.floor(this.date.getMonth() / 3);
        const startDate = new Date(this.date.getFullYear(), quarter * 3, 1);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);
        const today = new Date();
        if (today < endDate) {
          this.startDate = startDate;
          this.endDate = today;
        } else {
          this.startDate = startDate;
          this.endDate = endDate;
        }
     
    }

    forHalfYear() {
        this.typeCheck = false;
        this.pageNumber = 0;
        const startDate = new Date(new Date().getFullYear(), 0, 1);
        const endDate = new Date(new Date().getFullYear(), 11, 31);
        const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
        const today = new Date();
        if (today < midDate) {
          this.startDate = startDate;
          this.endDate = today;
        } else {
          this.startDate = startDate;
          this.endDate = midDate;
        }
      
    }

    forYear() {
        this.typeCheck = false;
        this.pageNumber = 0;
        const startDate = new Date(new Date().getFullYear(), 0, 1);
        const endDate = new Date(new Date().getFullYear(), 11, 31);
        const today = new Date();
        if (today < endDate) {
          this.startDate = startDate;
          this.endDate = today;
        } else {
          this.startDate = startDate;
          this.endDate = endDate;
        }
  
    }
    
    forCustomDate() {
        this.pageNumber = 0;
        this.typeCheck = true;
    }

    customDate() {
       
        if (this.customStartDate == null && this.customEndDate == null) {
            this.toasterService.showErrorToast('Dates cant be empty');
        } else if (this.customStartDate > this.customEndDate) {
            this.toasterService.showErrorToast('Start date cant be greater than end date');
        } else {
          this.startDate = this.customStartDate;
          this.endDate = this.customEndDate;
        }

        console.log(this.startDate)
        console.log(this.endDate)
     
    }

    onIonInfinite(ev:Event) { 
      console.log(this.startDate, this.endDate)
      this.getLeaderboardList(true,ev);
   }


    getLeaderboardList(isFirstLoad:boolean,event:any) {

        // console.log(startDate, endDate);
        // this.leaderboardService.getLeaderboardList(this.pageNumber,this.pageSize ,this.startDate, this.endDate).subscribe(
        //     (leaderboardList) => {
        //         this.leaderboardList = leaderboardList;
        //     },
        //     (err) => {
        //         this.toasterService.showErrorToast('Failed to load data')
        //     }
        // );
    }

    ngOnInit() {
        this.forMonth();
    }
}

