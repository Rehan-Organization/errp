import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputCustomEvent } from '@ionic/angular';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-achievement-form',
    templateUrl: './achievement-form.component.html',
    styleUrls: ['./achievement-form.component.scss'],
})
export class AchievementFormComponent implements OnInit {
    achievement: Achievement = {};
    errorMessage: string = '';
    AchievementService: any;

    constructor(
        private achievementService: AchievementService,
        private router: Router,
        private activatedRoute:ActivatedRoute,
        private alertController: AlertController
    ) {}

    ngOnInit() {
        
        const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
        
    if (isIdPresent) {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        
        this.achievementService.getAchievement(id).subscribe((data) => {
            this.achievement = data;
            console.log(data);
        });
    }
 
    }
 
   

    customCounterFormatter(inputLength: number, maxLength: number) {
        return `${maxLength - inputLength}/${maxLength}`;
    }

    onKeyPress(event: any) {
        if (
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (event.keyCode >= 97 && event.keyCode <= 122) ||
            event.keyCode == 32 ||
            event.keyCode == 46
        ) {
            return true;
        } else {
            return false;
        }
    }

    addAchievement() {
        console.log(this.achievement);
        const today = new Date();
        this.achievement.createdDate = today;
        this.achievement.updatedDate = today;

        // this.achievement.employeeId = 101;

        // this.achievementService.postAchievement(achievement).subscribe((achievementResponse) => {
        //     console.log(achievementResponse);
        // });
        //this.router.navigate(['/home/myAchievement']);

        if (!this.achievement.title?.trim() && !this.achievement.achievementDesc?.trim()) {
            this.showAlert('Field cannot be empty...');
        } else if (!this.achievement.title?.trim()) {
            this.showAlert('Field cannot be empty...');
        } else if (!this.achievement.achievementDesc?.trim()) {
            this.showAlert('Field cannot be empty...');
        } else {
            this.alertController
                .create({
                    header: 'Confirm Alert',
                    message: 'Are you sure you want to submit',
                    buttons: [
                        {
                            text: 'Confirm',
                            handler: () => {
                                this.achievementService.postAchievement(this.achievement).subscribe(
                                    (data) => {
                                        (this.achievement = data),
                                            this.router.navigate(['/home/myAchievement']);
                                        console.log(data);
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
