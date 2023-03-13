import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/errp-service/toast.service';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';   


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  constructor(
    private router: Router,
    private achievementService: AchievementService,
    private alertController: AlertController,
    private toastService: ToastService
  ) { }

  achievements: Achievement[] = [];
  pageNo: number = 0
  pageSize: number = 10
  errorMessage = ""
  ngOnInit() {
    this.getAchievement(false, null);
  }

  ionViewWillEnter() {
    this.getAchievement(true, null);
  }

  validateInput(achievement: Achievement): boolean {
    achievement.title = achievement.title?.trim();
    achievement.achievementDesc = achievement.achievementDesc?.trim();
    return (achievement.title == "" || achievement.achievementDesc == "" || !achievement.title || !achievement.achievementDesc)

  }

  onIonInfinite(ev: Event) {
    console.log("infinite");
    this.getAchievement(false, ev);
  }

  getAchievement(isRefresh: boolean, event: any) {

    if (isRefresh) this.pageNo = 0;
    this.achievementService.getPaginatedAchievement(this.pageNo, this.pageSize).subscribe(data => {
      if (isRefresh) {
        this.achievements = data;
      }
      else {
        this.achievements = this.achievements.concat(...data);
      }
      if (event) {
        event.target.complete();
      }
      this.pageNo++;
    }, error => {
      this.toastService.showErrorToast(error);
    })
  }

  submitAchievement(achievement: Achievement) {
    this.alertController
      .create({
        header: 'Alert',
        message: 'Are you sure, you want to submit this achievement?',
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Submit',
            handler: () => {

              if (this.validateInput(achievement)) {

                this.toastService.showErrorToast("Fields can not be empty");
              }
              else {

                this.achievementService.submitAchievement(achievement).subscribe(

                  (resp) => {
                    this.toastService.showSuccessToast("Achievement submitted successfully");
                    this.getAchievement(true, null);
                  },
                  (err) => {
                    (this.errorMessage = err.message),
                      this.toastService.showErrorToast(this.errorMessage)
                  }
                );
              }

            },
          },

        ],
      })
      .then((res) => {
        res.present();
      });
  }

  addAchievement() {
    this.router.navigate(["/home/achievement/addAchievement"])
  }

  deleteAchievement(achievement: Achievement) {
    this.alertController
      .create({
        header: 'Alert',
        message: 'Are you sure, you want to delete this achievement?',
        buttons: [
          {
            text: 'Cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.achievementService.deleteAchievement(achievement.achievementId).subscribe(
                (resp) => {
                  this.toastService.showSuccessToast("Achievement deleted successfully");
                  this.getAchievement(true, null);
                },
                (err) => {
                  this.toastService.showErrorToast(this.errorMessage);
                }
              );
            },
          },

        ],
      })
      .then((res) => {
        res.present();
      });
  }

}