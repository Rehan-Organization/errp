import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';
import { LoggedInUserContext } from 'src/app/providers/logged-in-user-context.service';
import { ToastService } from 'src/app/errp-service/toast.service';
@Component({
    selector: 'app-feedback-list',
    templateUrl: './feedback-list.component.html',
    styleUrls: ['./feedback-list.component.scss'],
})
export class FeedbackListComponent implements OnInit {
    private updateSubscription?: Subscription;
    errors: any;
    
    constructor(
        private feedbackService: FeedbackService,
        private router: Router,
        private alertController: AlertController,
        private toastService: ToastService,
        private userContext: LoggedInUserContext
    ) {}

    isSupervisor: boolean = false;
    userRole: any;
    employees: Employee[] = [];
    feedbacks: Feedback[] = [];
    myFeedback: Feedback[] = [];
    givenFeedback: Feedback[] = [];
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    isMyFeedbacks?: boolean;
    searchEmployee: string = '';
    myFeedbacksPageNo: number = 0;
    givenFeedbacksPageNo: number = 0;
    pageSize: number = 4;
    ngOnInit() {
        this.userRole = this.userContext.getLoggedInUser()?.authorities[0].authority;
        this.myFeedbacksPageNo = 0;
        this.givenFeedbacksPageNo = 0;
        this.fetchFeedbacks(false, null);
        this.fetchReportees();
    }

    refreshList() {
        this.myFeedbacksPageNo = 0;
        this.givenFeedbacksPageNo = 0;
        this.fetchFeedbacks(false, null);
    }

    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => {
            this.employees = reportee;
            if (this.employees.length > 0) this.isSupervisor = true;
        });
    }

    onIonInfinite(ev: Event) {
        this.fetchFeedbacks(true, ev);
    }

    // If isMyFeedback is true then returns feedback received by user
    // If isMyFeedback is false then returns feedback sent by supervisor to associated reportees

    fetchFeedbacks(isFirstLoad: boolean, event: any) {
        if (this.choosenOption == 'My Feedbacks') {
            this.feedbacks = [];
            for (let i = 0; i < this.myFeedback.length; i++) {
                this.feedbacks.push(this.myFeedback[i]);
            }
            this.isMyFeedbacks = true;
            this.feedbackService
                .fetchAllFeedbacks(this.isMyFeedbacks, this.myFeedbacksPageNo, this.pageSize)
                .subscribe(
                    (feedback) => {
                        for (let i = 0; i < feedback.length; i++) {
                            this.feedbacks.push(feedback[i]);
                            this.myFeedback.push(this.feedbacks[i]);
                        }
                        if (isFirstLoad) {
                            event.target.complete();
                        }
                        this.myFeedbacksPageNo++;
                    },
                    (error) => {
                        console.error(error);
                    }
                );
        } else {
            this.isMyFeedbacks = false;
            this.feedbacks = [];
            for (let i = 0; i < this.givenFeedback.length; i++) {
                this.feedbacks.push(this.givenFeedback[i]);
            }
            this.feedbackService
                .fetchAllFeedbacks(this.isMyFeedbacks, this.givenFeedbacksPageNo, this.pageSize)
                .subscribe(
                    (feedback) => {
                        for (let i = 0; i < feedback.length; i++) {
                            this.feedbacks.push(feedback[i]);
                            this.givenFeedback.push(this.feedbacks[i]);
                        }
                        if (isFirstLoad) {
                            event.target.complete();
                        }
                        this.givenFeedbacksPageNo++;
                    },
                    (error) => {
                        console.error(error);
                    }
                );
        }
    }
    addFeedback() {
        this.router.navigate(['home/viewFeedback/add']);
    }

    updateFeedback(feedback: Feedback) {
        this.router.navigate(['home/viewFeedback/add/' + feedback.id]);
    }

    async deleteFeedback(feedback: Feedback) {
        const alert = await this.alertController.create({
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
                        this.feedbackService.removeFeedback(feedback.id).subscribe((feedback) => {
                            this.feedbacks.forEach(function (value) {});
                            this.toastService.showSuccessToast('Feedback deleted successfully');
                            this.fetchFeedbacks(false, null);
                        });
                    },
                },
            ],
        });
        await alert.present();
    }
}
