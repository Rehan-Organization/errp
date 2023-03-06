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

  feedback:Feedback = {};
  
  employees:Employee []=[];
  selectedValue:number=5;
  constructor(private feedbackService:FeedbackService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this. fetchReportees();
  }
  
  addFeedback(feedback: Feedback)
  {
    feedback.receiverId=this.selectedValue;
    this.feedbackService.saveFeedback(feedback).subscribe(feedbackResponse => {
      console.log(feedbackResponse)
   });
  }
  fetchReportees()
  {
    this.feedbackService.getReportees().subscribe(reportee => this.employees=reportee);
  }


  
   cancelForm(){
    // this.employee[employeeName] = '';
    // this.feedback.title = '';
    // this.feedback.description = '';
   }

}
