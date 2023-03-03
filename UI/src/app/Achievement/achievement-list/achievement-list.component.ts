import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  //achievement : Achievement[] = [];
  userId = 2

  constructor(private router:Router, private achievementService : AchievementService) {}

  achievements : Achievement[] = [];

  ngOnInit() {

    this.getAchievement();

  }

  getAchievement()
  {
    this.achievementService.getAllAchievement(this.userId).subscribe(Achievement => this.achievements = Achievement);
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  

}
  


