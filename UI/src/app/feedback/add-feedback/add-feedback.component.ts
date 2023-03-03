import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Feedback } from '../feedback';
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
    this.feedbackService.getReportees().subscribe(reportee => {
      this.employee.id = reportee.id;
      this.employee.name = reportee.name;
    });
  }
  
  cancelForm(){
    this.employee.name = '';
    this.feedback.title = '';
    this.feedback.description = '';
  }

}
