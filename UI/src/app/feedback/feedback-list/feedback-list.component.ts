import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { ToastService } from 'src/app/errp-service/toast.service';

@Component({
    selector: 'app-feedback-list',
    templateUrl: './feedback-list.component.html',
    styleUrls: ['./feedback-list.component.scss'],
})
export class FeedbackListComponent implements OnInit {
    constructor(
        private feedbackService: FeedbackService,
        private router: Router,
        private alertController: AlertController,
        private toastService: ToastService
    ) {}

    isAuthorizedUser: boolean = false;
    reportees: Employee[] = [];
    feedbacks: Feedback[] = [];
    myFeedback: Feedback[] = [];
    givenFeedback: Feedback[] = [];
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    isMyFeedbacks?: boolean;
    searchReportee: string = '';
    myFeedbacksPageNo: number = 0;
    givenFeedbacksPageNo: number = 0;
    pageSize: number = 4;

    ngOnInit() {
        this.myFeedbacksPageNo = 0;
        this.givenFeedbacksPageNo = 0;
        this.fetchReportees();
    }

    ionViewWillEnter() {
        this.refreshList();
    }

    refreshList() {
        this.myFeedbacksPageNo = 0;
        this.givenFeedbacksPageNo = 0;
        this.fetchFeedbacks(false, null);
        this.feedbackService
            .fetchAllFeedbacks(
                this.choosenOption == 'My Feedbacks',
                this.myFeedbacksPageNo,
                this.pageSize
            )
            .subscribe((data) => {
                if (data == null) this.toastService.showErrorToast('Feeback not raised');
                else this.feedbacks = data;
            });
    }

    fetchReportees() {
        this.feedbackService.getReportees().subscribe(
            (reportee) => {
                if (reportee != null) {
                    this.reportees = reportee;
                    this.isAuthorizedUser = true;
                } else {
                    if (this.isAuthorizedUser)
                        this.toastService.showErrorToast('No reportees assigned');
                }
            },
            (error) => {
                if (error.status == 404) this.toastService.showErrorToast('No reportees assigned');
            }
        );
    }

    onIonInfinite(ev: Event) {
        this.fetchFeedbacks(true, ev);
    }
    // If isMyFeedback is true then returns feedback received by user
    // If isMyFeedback is false then returns feedback sent by supervisor to associated reportees

    fetchFeedbacks(isFirstLoad: boolean, event: any) {
        if (this.choosenOption == 'My Feedbacks') this.isMyFeedbacks = true;
        else this.isMyFeedbacks = false;
        this.feedbackService
            .fetchAllFeedbacks(this.isMyFeedbacks, this.myFeedbacksPageNo, this.pageSize)
            .subscribe(
                (feedback) => {
                    if (feedback == null) {
                        this.toastService.showErrorToast('Feeback not raised');
                    } else {
                        if (this.choosenOption == 'My Feedbacks') {
                            if (!this.myFeedback) {
                                this.myFeedback = [];
                            }
                            this.myFeedback = this.myFeedback.concat(...feedback);
                            this.feedbacks = this.myFeedback;
                        } else {
                            if (!this.givenFeedback) {
                                this.givenFeedback = [];
                            }
                            this.givenFeedback = this.givenFeedback.concat(...feedback);
                            this.feedbacks = this.givenFeedback;
                        }
                        if (isFirstLoad) {
                            event.target.complete();
                        }
                        if (this.choosenOption == 'My Feedbacks') this.myFeedbacksPageNo++;
                        else this.givenFeedbacksPageNo++;
                    }
                },
                (error) => {
                    this.toastService.showErrorToast('Oops, Something went wrong!!!');
                }
            );
    }

    addFeedback() {
        this.router.navigate(['home/viewFeedback/add']);
    }

    updateFeedback(feedback: Feedback) {
        this.router.navigate(['home/viewFeedback/update/' + feedback.id]);
    }

    deleteFeedback(feedback: Feedback) {
        this.alertController
            .create({
                header: 'Are you sure you want to delete ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {},
                    },
                    {
                        text: 'Delete',
                        role: 'confirm',
                        handler: () => {
                            this.feedbackService.removeFeedback(feedback.id).subscribe(
                                (feedback) => {
                                    this.toastService.showSuccessToast(
                                        'Feedback deleted successfully'
                                    );
                                    this.refreshList();
                                },
                                (error) => {
                                    if (error.status == 401)
                                        this.toastService.showErrorToast('User is not Authorized');
                                    else if (error.status == 404)
                                        this.toastService.showErrorToast('Feedback not found');
                                }
                            );
                        },
                    },
                ],
            })
            .then((res) => res.present());
    }

    searchReportees(event: any) {
        const query = event.target.value.toLowerCase();
        console.log('Search worked');
        this.myFeedback;
        let feedbackListToFilter;
        if (this.choosenOption == 'My Feedbacks') {
            feedbackListToFilter = this.myFeedback;
        } else {
            feedbackListToFilter = this.givenFeedback;
        }

        if (!this.searchReportee) {
            this.feedbacks = feedbackListToFilter;
        }

        this.feedbacks = feedbackListToFilter.filter(
            (d) => d.receiver!.employeeName!.toLowerCase().indexOf(query) > -1
        );
    }
}
