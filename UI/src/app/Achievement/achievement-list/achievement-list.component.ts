import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';

@Component({
    selector: 'app-achievement-list',
    templateUrl: './achievement-list.component.html',
    styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {
    // achievement : Achievement[] = [];
    userId = 0;

  //achievement : Achievement[] = [];
  userId = 1
  httpClient: any;
  achievement: Achievement[];

  constructor(
    private router:Router, 
    private achievementService : AchievementService,
    private activatedRoute:ActivatedRoute,) {}

    ngOnInit() {
        this.getAchievement();
    }

    getAchievement() {
        this.achievementService
            .getAllAchievement()
            .subscribe((Achievement) => (this.achievements = Achievement));
    }

    addAchievement() {
        this.router.navigate(['/home/myAchievement/addAchievement']);
    }

    // getAchievement()
    // {
    //   this.achievementService.getAllAchievement().subscribe(data =>{
    //     this.achievements = data;
    //     console.log(data)
    //   });

    // }

    delete(achievement: Achievement) {
        // this.achievementService.deleteAchievement(achievement.id).subscribe(
        //   (resp)=>{
        //     console.log(resp);
        //   },(err)=>{
        //     console.log(err);
        //   }
        // );


  // editAchievement(){
  //   this.router.navigate(["/home/myAchievement/editAchievement/"+this.achievements.achievementId])
  //   this.achievementService.getAchievement(this.userId).subscribe(achievement => this.achievements = achievement);
  // }

  handleUpdate(event:Event){
    console.log(event);
  }

        this.alertController
            .create({
                header: 'Confirm Alert',
                message: 'Are you sure you want to delete?',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.achievementService.deleteAchievement(achievement.achievementId).subscribe(
                                (resp) => {
                                    this.router.navigate(['/home/myAchievement']);
                                    console.log(resp);
                                },
                                (err) => {
                                    (this.errorMessage = err.message),
                                        this.showAlert(this.errorMessage);
                                }
                            );
                        },
                    },
                    {
                        text: 'Cancel',
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }
    showAlert(message: string) {
        this.alertController
            .create({
                header: 'Alert',
                message: message,
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            })
            .then((res) => {
                res.present();
            });
    }
}
