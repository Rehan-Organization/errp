import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../feedback-model.ts/employee';
import { Feedback } from '../feedback-model.ts/feedback';

import { FeedbackService } from '../feedback.service';

@Component({
    selector: 'app-add-feedback',
    templateUrl: './add-feedback.component.html',
    styleUrls: ['./add-feedback.component.scss'],
})
export class AddFeedbackComponent implements OnInit {
    feedback: Feedback = {
        receiverId: {},
        senderId: {}
    };

    employees: Employee[] = [];
    selectedValue: number=0;
    constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) {}
    feedbackId?:number;
    urlId?:any;
    fetchedFeedback:Feedback[]=[];
    ngOnInit() {
      this.urlId=this.route.snapshot.paramMap.get("id");
      console.log("url id"+this.urlId);
      if(this.urlId!=null)
      {
        this.feedbackService.fetchFeedback(this.urlId).subscribe(feedback=> this.feedback=feedback);
      }
      else{
            this.feedback.title="";
            this.feedback.description="";
      }
      // this.route.snapshot.paramMap('id')
        this.fetchReportees();
    }

    addFeedback(feedback: Feedback) {
        alert(this.employees.length);
        // // feedback.receiverId={}
        feedback.receiverId.employeeId = this.selectedValue;
        console.log(feedback.receiverId);
        this.feedbackService.saveFeedback(feedback).subscribe((feedbackResponse) => {
            console.log(feedbackResponse);
        });
    }
    fetchReportees() {
        this.feedbackService.getReportees().subscribe((reportee) => (this.employees = reportee));
    }

    updateFeedback(){
      this.feedbackService.updateFeedback(this.feedback,this.urlId).subscribe();
    }

    cancelForm() {
        console.log(this.selectedValue);
        // this.employee[employeeName] = '';
        // this.feedback.title = '';
        // this.feedback.description = '';
    }
}
