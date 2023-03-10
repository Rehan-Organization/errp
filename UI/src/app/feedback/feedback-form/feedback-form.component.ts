import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ToastService } from '../toast.service';
@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
    errors: any;
    // feedbackForm = new FormGroup({
    //     title: new FormControl('', Validators.required),
    //     description: new FormControl('', [Validators.required, Validators.required]),
    // });

    constructor(
        private alertController: AlertController,
        private toast: ToastController,
        private feedbackService: FeedbackService,
        private route: ActivatedRoute,
        private toastService: ToastService,
        private router: Router
    ) { }

    newFeedback: Feedback = {
        senderId: {},
        receiverId: {},
        title: '',
        description: '',
    }
    feedback: Feedback = {
        senderId: {},
        receiverId: {},
        title: '',
        description: ''
    }
    employees: Employee[] = [];
    selectedValue: any;
    checkRole: number;
    feedbackId?: number;
    urlId?: any;
    fetchedFeedback: Feedback[] = [];
    ngOnInit() {
        this.urlId = this.route.snapshot.paramMap.get('id');
        console.log('url id' + this.urlId);
        if (this.urlId != null) {
            this.feedbackService
                .fetchFeedback(this.urlId)
                .subscribe((feedback) => (this.newFeedback = feedback));
        } else {
            this.newFeedback.title = '';
            this.newFeedback.description = '';
        }
        // this.route.snapshot.paramMap('id')
        this.fetchReportees();

    }

    async addFeedback(feedback: Feedback) {
        if (this.newFeedback.receiverId.employeeName?.trim()) {
            this.showAlert('Employee name cannot be empty!');
        } else if (!this.newFeedback.title?.trim()) {
            this.showAlert('Title cannot be empty!');
        } else if (!this.newFeedback.description?.trim()) {
            this.showAlert('Description cannot be empty!');
        } else {
            const alert = await this.alertController.create({
                header: 'Are you sure you want to add feedback ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {

                        },
                    },
                    {
                        text: 'Submit',
                        role: 'confirm',
                        handler: () => {
                            feedback.receiverId.employeeId = this.selectedValue;
                            this.feedbackService
                                .saveFeedback(feedback)
                                .subscribe((feedbackResponse) => {
                                    if (feedbackResponse != null) {
                                        this.newFeedback.title = '';
                                        this.newFeedback.description = '';
                                        this.selectedValue = null;
                                        this.toastService.showSuccessToast("Feedback added successfully")
                                    }
                                    if (feedbackResponse == null) {
                                        this.toastService.showErrorToast("Oops, Something went wrong!!! Please try again");
                                    }

                                },
                                    error => {
                                        this.errors = error;
                                        this.toastService.showErrorToast(error);
                                    },
                                );

                        },
                    },
                ],
            });
            await alert.present();
        }
    }

    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => {
            this.employees = reportee;
            this.checkRole = this.employees.length;
            console.log(this.checkRole);
        });
    }

    async updateFeedback() {
        const alert = await this.alertController.create({
            header: 'Are you sure you want to update feedback ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {

                    },
                },
                {
                    text: 'Update',
                    role: 'confirm',
                    handler: () => {
                        this.feedbackService.updateFeedback(this.newFeedback, this.urlId)
                            .subscribe((feedbackResponse) => {
                                if (feedbackResponse != null) {
                                    this.router.navigate(['home/viewFeedback']);
                                    this.toastService.showSuccessToast("Feedback added successfully")
                                }
                                if (feedbackResponse == null) {
                                    this.toastService.showErrorToast("Oops, Something went wrong!!! Please try again");
                                }


                            }, error => {
                                this.errors = error;
                                this.toastService.showErrorToast(error);
                            });

                    },
                },
            ],
        });
        await alert.present();
    }

    cancelForm() {
        //this.employees[employeeName] = '';
        if (this.urlId != null) {
            this.router.navigate(['home/viewFeedback']);
        }
        this.selectedValue = null;
        this.newFeedback.title = '';
        this.newFeedback.description = '';
    }

    showAlert(message: string) {
        this.alertController
            .create({ header: 'Alert', message: message, buttons: [{ text: 'Ok' }] })
            .then((res) => {
                res.present();
            });
    }
}
