import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputCustomEvent } from '@ionic/angular';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';
import { AlertController } from '@ionic/angular';
import { LoggedInUserContext } from 'src/app/providers/logged-in-user-context.service';
import { LoggedInUser } from 'src/app/providers/logged-in-user.model';


@Component({
    selector: 'app-achievement-form',
    templateUrl: './achievement-form.component.html',
    styleUrls: ['./achievement-form.component.scss'],
})
export class AchievementFormComponent implements OnInit {
    achievement: Achievement = {};
    errorMessage: string = '';
    isIdPresent: boolean = false;
    loggedInUser: LoggedInUser | undefined;

    constructor(
        private achievementService: AchievementService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertController: AlertController,
        private userContext: LoggedInUserContext
    ) { }

    ngOnInit() {

        this.isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');

        if (this.isIdPresent) {
            const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

            this.achievementService.getAchievement(id).subscribe((data) => {
                this.achievement = data;
                console.log(data);
            });
        }

        this.loggedInUser = this.userContext.getLoggedInUser();

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

    handleSave() {
        this.saveAchievement();
    }

    handleUpdate() {
        this.updateAchievement();
    }

    handleSubmit() {
        this.submitAchievement();
    }

    submitAchievement() {
        const today = new Date();
        this.achievement.createdBy = this.loggedInUser?.employeeId;
        this.achievement.updatedBy = this.loggedInUser?.employeeId;
        this.achievement.createdDate = today;
        this.achievement.updatedDate = today;
        this.achievement.achievementStatus = 1;

        this.achievement.title = this.achievement.title?.trim();
        this.achievement.achievementDesc = this.achievement.achievementDesc?.trim();
        if (this.achievement.title == "" || this.achievement.achievementDesc == "" || !this.achievement.title || !this.achievement.achievementDesc) {
            this.showAlert("Fields can not be empty")
        } else {
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



                                this.achievementService.submitAchievement(this.achievement).subscribe(
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

                    ],
                })
                .then((res) => {
                    res.present();
                });
        }

    }
    updateAchievement() {

        const today = new Date();
        this.achievement.updatedDate = today;
        this.achievement.updatedBy = this.loggedInUser?.employeeId;

        this.achievement.title = this.achievement.title?.trim();
        this.achievement.achievementDesc = this.achievement.achievementDesc?.trim();
        if (this.achievement.title == "" || this.achievement.achievementDesc == "" || !this.achievement.title || !this.achievement.achievementDesc) {
            this.showAlert("Fields can not be empty")
        } else {
            this.alertController
                .create({
                    header: 'Alert',
                    message: 'Are you sure, you want to update this achievement?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Update',
                            handler: () => {
                                this.achievementService.updateAchievement(this.achievement).subscribe(
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

                    ],
                })
                .then((res) => {
                    res.present();
                });
        }
    }

    saveAchievement() {
        const today = new Date();
        this.achievement.createdDate = today;
        this.achievement.updatedDate = today;
        this.achievement.createdBy = this.loggedInUser?.employeeId;
        this.achievement.updatedBy = this.loggedInUser?.employeeId;
        this.achievement.employeeId = this.loggedInUser?.employeeId;
        this.achievement.achievementStatus = 0;
        this.achievement.title = this.achievement.title?.trim();
        this.achievement.achievementDesc = this.achievement.achievementDesc?.trim();

        if (this.achievement.title == "" || this.achievement.achievementDesc == "" || !this.achievement.title || !this.achievement.achievementDesc) {
            this.showAlert("Fields can not be empty")
        } else {
            this.alertController
                .create({
                    header: 'Alert',
                    message: 'Are you sure,you want to save this achievement?',
                    buttons: [
                        {
                            text: 'Save',
                            handler: () => {
                                this.achievementService.saveAchievement(this.achievement).subscribe(
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
