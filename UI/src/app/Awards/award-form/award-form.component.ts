import { Component, OnInit } from '@angular/core';
import { AwardService } from '../award.service';
import { AwardType } from '../awardtype';
import { Employee } from '../employee';

@Component({
  selector: 'app-award-form',
  templateUrl: './award-form.component.html',
  styleUrls: ['./award-form.component.scss'],
})
export class AwardFormComponent implements OnInit {

  constructor(private awardService:AwardService) { }

  employees:Employee[];
  // employees:Employee[] = [{
  //   employeeId: 0,
  //   username:"pushkar" ,
  //   employeeName: "pushkar joshi",
  //   supervisorId: 0
  // },{
  //   employeeId: 1,
  //   username:"pradip" ,
  //   employeeName: "pradip bankar",
  //   supervisorId: 0
  // },{
  //   employeeId: 2,
  //   username:"prem" ,
  //   employeeName: "prem wagh",
  //   supervisorId: 0

  // }]
  awards:AwardType[];




  ngOnInit() {
    this.awardService.getAwardTypes().subscribe(data=>{
      this.awards = data;
    })
    this.awardService.getAllUsers().subscribe(data=>{
      this.employees = data;
    })
  }

}
