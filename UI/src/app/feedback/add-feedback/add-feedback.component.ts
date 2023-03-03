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

  currentDate: Date = new Date();
  feedback:Feedback = {};
 
  
  employee:Employee ={};
  empData = ["pratiksha", "prajakta"]
  constructor(private feedbackService:FeedbackService, private route: ActivatedRoute) {
   }

  ngOnInit() {

  }

  addFeedback(feedback: Feedback)
  {
    this.feedbackService.saveFeedback(feedback).subscribe(feedbackResponse => {
      console.log(feedbackResponse)
   });
  }

  fetchFeedback()
  {
    this.feedbackService.getFeedback().subscribe(reportee => {
      this.employee=reportee;
    });
  }
  
  clearFeedbackData(){
    this.employee.employeeName = '';
    this.feedback.title = '';
    this.feedback.description = '';
  }

}
