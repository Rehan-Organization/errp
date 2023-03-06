import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss'],
})
export class AddFeedbackComponent implements OnInit {

  employees:any=[
    "Avadhut Patil","Athrav Pandit",'Adarsh Suryawanshi'
]

feebackForm=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),})


  constructor() { }

  ngOnInit() {
    
  }

}
