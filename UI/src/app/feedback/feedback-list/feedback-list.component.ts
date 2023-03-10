import { AlertController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';
import { FeedbackService } from '../feedback.service';
import { Observable, Subscription, interval } from 'rxjs';
import { ToastService } from '../toast.service';
import { LoggedInUserContext } from 'src/app/providers/logged-in-user-context.service';
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
        private userContext:LoggedInUserContext
    ) {
    
        
    }
    userRole:any;
    employees: Employee[] = [];
    feedbacks: Feedback[] = [];
    options: string[] = ['My Feedbacks', 'Feedbacks Given By Me'];
    choosenOption: string = 'My Feedbacks';
    isMyFeedbacks?: boolean;
    searchEmployee: string = '';
    isMyFeedbacksPageNo: number = 0;
    isFeedbacksGivenByMePageNo:number=0;
    pageSize: number = 4;
    ngOnInit() {
        this.userRole=this.userContext.getLoggedInUser()?.authorities[0].authority;
        this.isMyFeedbacksPageNo = 0;
        this.isFeedbacksGivenByMePageNo=0;
        this.fetchFeedbacks(false, null);
    }

    // refreshList() {
    //     this.pageNo = 0;
    //     this.fetchFeedbacks(false, null);
    // }

    onIonInfinite(ev: Event) {
        this.fetchFeedbacks(true, ev);
    }

    fetchFeedbacks(isFirstLoad: boolean, event: any) {
        if (this.choosenOption == 'My Feedbacks') {
            this.isMyFeedbacks = true;
            this.feedbackService
                .fetchAllFeedbacks(this.isMyFeedbacks, this.isMyFeedbacksPageNo, this.pageSize)
                .subscribe(
                    (feedback) => {
                        for (let i = 0; i < feedback.length; i++) {
                            this.feedbacks.push(feedback[i]);
                        }
                        if (isFirstLoad) {
                            event.target.complete();
                        }
                        this.isMyFeedbacksPageNo++;
                    },
                    (error) => {
                        console.error(error);
                    }
                );
        } else {
            this.isMyFeedbacks = false;
            this.feedbackService
            .fetchAllFeedbacks(this.isMyFeedbacks, this.isFeedbacksGivenByMePageNo, this.pageSize)
            .subscribe(
                (feedback) => {
                    for (let i = 0; i < feedback.length; i++) {
                        this.feedbacks.push(feedback[i]);
                    }
                    if (isFirstLoad) {
                        event.target.complete();
                    }
                    this.isFeedbacksGivenByMePageNo++;
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
                            this.toastService.showSuccessToast("Feedback deleted successfully");
                            this.feedbacks = this.feedbacks.filter(
                                (newFeedback) => newFeedback.id != feedback.id
                            );
                        },(error) => {
                            this.errors = error;
                            this.toastService.showErrorToast(error);
                          },);
                    },
                },
            ],
        });
        await alert.present();
    }
    updateFeedback(feedback: Feedback) {
        this.router.navigate(['home/viewFeedback/add/' + feedback.id]);
    }

}
