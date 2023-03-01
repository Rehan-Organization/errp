import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class MyAchievementComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {}

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  
}
  


