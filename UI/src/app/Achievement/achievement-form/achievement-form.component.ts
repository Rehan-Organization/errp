import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(
        private achievementService: AchievementService,
        private router: Router,
        // private route: ActivatedRoute,
        private alertController: AlertController
    ) {}
    ngOnInit() {}

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
        const today = new Date();
        this.achievement.createdDate = today;
        this.achievement.lastUpdatedDate = today;

        this.achievement.employee_id = 101;

        // this.achievementService.postAchievement(achievement).subscribe((achievementResponse) => {
        //     console.log(achievementResponse);
        // });
        //this.router.navigate(['/home/myAchievement']);

        if (!this.achievement.title?.trim() && !this.achievement.description?.trim()) {
            this.showAlert('Field cannot be empty...');
        } else if (this.achievement.title?.trim()) {
            this.showAlert('Field cannot be empty...');
        } else if (this.achievement.description?.trim()) {
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
