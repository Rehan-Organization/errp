import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Console } from 'console';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';

@Component({
    selector: 'app-achievement-list',
    templateUrl: './achievement-list.component.html',
    styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {
    //achievement : Achievement[] = [];
    userId = 0;

    constructor(
        private router: Router,
        private achievementService: AchievementService,
        private alertController: AlertController
    ) {}

    achievements: Achievement[] = [];
    errorMessage: string = '';

    ngOnInit() {
        this.getAchievement();
    }

    getAchievement() {
        this.achievementService
            .getAllAchievement(this.userId)
            .subscribe((Achievement) => (this.achievements = Achievement));
    }

    addAchievement() {
        this.router.navigate(['/home/myAchievement/addAchievement']);
    }

  }

  getAchievement()
  {
    this.achievementService.getAllAchievement().subscribe(data =>{
      this.achievements = data;
      console.log(data)
    });
    
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  

        this.alertController
            .create({
                header: 'Confirm Alert',
                message: 'Are you sure you want to delete?',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.achievementService.deleteAchievement(achievement.id).subscribe(
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
