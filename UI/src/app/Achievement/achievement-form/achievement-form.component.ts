import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-achievement-form',
  templateUrl: './achievement-form.component.html',
  styleUrls: ['./achievement-form.component.scss'],
})
export class AddAchievementComponent implements OnInit {

  achievement : Achievement = {};
  

  constructor(private achievementService: AchievementService, private router:Router) { }

  ngOnInit() {}

  addAchievement(achievement: Achievement)
  {

    const today = new Date()
    this.achievement.createdDate = today
    this.achievement.lastUpdatedDate = today

    this.achievement.employee_id = 101
    
    this.achievementService.postAchievement(achievement).subscribe(achievementResponse => {
      console.log(achievementResponse)
    })
    this.router.navigate(["/home/myAchievement"])


  }
}
