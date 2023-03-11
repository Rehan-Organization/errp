import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/errp-service/toast.service';
@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
    errors: any;
    constructor(
        private alertController: AlertController,
        private feedbackService: FeedbackService,
        private route: ActivatedRoute,
        private toastService: ToastService,
        private router: Router
    ) {}

    newFeedback: Feedback = {
        sender: {},
        receiver: {},
        title: '',
        description: '',
    };
    feedback: Feedback = {
        sender: {},
        receiver: {},
        title: '',
        description: '',
    };
    reportees: Employee[] = [];
    selectedFeedbackId: any = null;
    feedbackId?: number;
    updateFeedbackId?: any;
    fetchedFeedback: Feedback[] = [];
    ngOnInit() {
        this.updateFeedbackId = this.route.snapshot.paramMap.get('id');
        if (this.updateFeedbackId != null) {
            this.feedbackService.fetchFeedback(this.updateFeedbackId).subscribe(
                (feedback) => (this.newFeedback = feedback),
                (error) => {
                    this.toastService.showErrorToast(
                        'Oops, Something went wrong!!! Please try again'
                    );
                }
            );
        } else {
            this.newFeedback.title = '';
            this.newFeedback.description = '';
        }

        this.fetchReportees();
    }

    async addFeedback(feedback: Feedback) {
        if (this.selectedFeedbackId == null) {
            this.showAlert('Reportee name cannot be empty!');
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
                        handler: () => {},
                    },
                    {
                        text: 'Submit',
                        role: 'confirm',
                        handler: () => {
                            feedback.receiver.employeeId = this.selectedFeedbackId;
                            this.feedbackService.saveFeedback(feedback).subscribe(
                                (feedbackResponse) => {
                                    if (feedbackResponse != null) {
                                        this.newFeedback.title = '';
                                        this.newFeedback.description = '';
                                        this.selectedFeedbackId = null;
                                        this.toastService.showSuccessToast(
                                            'Feedback added successfully'
                                        );
                                    }
                                    if (feedbackResponse == null) {
                                        this.toastService.showErrorToast(
                                            'Oops, Something went wrong!!! Please try again'
                                        );
                                    }
                                },
                                (error) => {
                                    this.toastService.showErrorToast(
                                        'Oops, Something went wrong!!! Please try again'
                                    );
                                }
                            );
                        },
                    },
                ],
            });
            await alert.present();
        }
    }

    fetchReportees() {
        this.feedbackService.getReportees().subscribe(
            (reportee) => {
                this.reportees = reportee;
            },
            (error) => {
                this.toastService.showErrorToast('Oops, Something went wrong!!! Please try again');
            }
        );
    }

    async updateFeedback() {
        if (!this.newFeedback.title?.trim()) {
            this.showAlert('Title cannot be empty!');
        } else if (!this.newFeedback.description?.trim()) {
            this.showAlert('Description cannot be empty!');
        } else {
            const alert = await this.alertController.create({
                header: 'Are you sure you want to update feedback ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {},
                    },
                    {
                        text: 'Update',
                        role: 'confirm',
                        handler: () => {
                            this.feedbackService
                                .updateFeedback(this.newFeedback, this.updateFeedbackId)
                                .subscribe(
                                    (feedbackResponse) => {
                                        if (feedbackResponse != null) {
                                            this.router.navigate(['home/viewFeedback']);
                                            this.toastService.showSuccessToast(
                                                'Feedback added successfully'
                                            );
                                        }
                                        if (feedbackResponse == null) {
                                            this.toastService.showErrorToast(
                                                'Oops, Something went wrong!!! Please try again'
                                            );
                                        }
                                    },
                                    (error) => {
                                        this.toastService.showErrorToast(
                                            'Oops, Something went wrong!!! Please try again'
                                        );
                                    }
                                );
                        },
                    },
                ],
            });
            await alert.present();
        }
    }

    cancelForm() {
        if (this.updateFeedbackId != null) {
            this.router.navigate(['home/viewFeedback']);
        }
        this.selectedFeedbackId = null;
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
