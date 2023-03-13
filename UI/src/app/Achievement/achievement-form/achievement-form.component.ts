import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';
import { AlertController } from '@ionic/angular';
import { LoggedInUserContext } from 'src/app/providers/logged-in-user-context.service';
import { LoggedInUser } from 'src/app/providers/logged-in-user.model';
import { ToastService } from 'src/app/errp-service/toast.service';
import { BaseForm } from 'src/app/base-form/base-form.component';

@Component({
    selector: 'app-achievement-form',
    templateUrl: './achievement-form.component.html',
    styleUrls: ['./achievement-form.component.scss'],
})
export class AchievementFormComponent extends BaseForm implements OnInit {
    achievement: Achievement = {};
    errorMessage: string = '';
    isIdPresent: boolean = false;
    loggedInUser: LoggedInUser | undefined;

    constructor(
        private achievementService: AchievementService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertController: AlertController,
        private userContext: LoggedInUserContext,
        private toastService: ToastService
    ) {
        super();
    }

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

    validateInput(): boolean {
        this.achievement.title = this.achievement.title?.trim();
        this.achievement.achievementDesc = this.achievement.achievementDesc?.trim();
        return (
            this.achievement.title == '' ||
            this.achievement.achievementDesc == '' ||
            !this.achievement.title ||
            !this.achievement.achievementDesc
        );
    }

    customCounterFormatter(inputLength: number, maxLength: number) {
        return `${maxLength - inputLength}/${maxLength}`;
    }

    onKeyPress(event: any) {
        if (
            (event.keyCode >= 65 && event.keyCode <= 90) ||
            (event.keyCode >= 97 && event.keyCode <= 122) ||
            event.keyCode == 32 ||
            event.keyCode == 46 ||
            (event.keyCode >= 48 && event.keyCode <= 57)
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
        if (this.validateInput()) {
            this.toastService.showErrorToast('Fields can not be empty');
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
                                this.achievementService
                                    .submitAchievement(this.achievement)
                                    .subscribe(
                                        (data) => {
                                            this.toastService.showSuccessToast(
                                                'Achievement submitted successfully'
                                            );
                                            this.achievement = data;
                                            this.closeForm();
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
    updateAchievement() {
        if (this.validateInput()) {
            this.toastService.showErrorToast('Fields can not be empty');
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
                                this.achievementService
                                    .updateAchievement(this.achievement)
                                    .subscribe(
                                        (data) => {
                                            (this.achievement = data), this.closeForm();
                                            this.toastService.showSuccessToast(
                                                'Achievement updated successfully'
                                            );
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

    saveAchievement() {
        this.achievement.employeeId = this.loggedInUser?.employeeId;

        if (this.validateInput()) {
            this.toastService.showErrorToast('Fields can not be empty');
        } else {
            this.alertController
                .create({
                    header: 'Alert',
                    message: 'Are you sure,you want to save this achievement?',
                    buttons: [
                        {
                            text: 'Cancel',
                        },
                        {
                            text: 'Save',
                            handler: () => {
                                this.achievementService.saveAchievement(this.achievement).subscribe(
                                    (data) => {
                                        (this.achievement = data), this.closeForm();
                                        this.toastService.showSuccessToast(
                                            'Achievement saved successfully'
                                        );
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
    // showAlert(message: string) {
    //     this.alertController
    //         .create({
    //             header: 'Alert',
    //             message: message,
    //             buttons: [
    //                 {
    //                     text: 'Ok',
    //                 },
    //             ],
    //         })
    //         .then((res) => {
    //             res.present();
    //         });
    // }
}
