import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class MyAchievementComponent implements OnInit {

  //achievement : Achievement[] = [];

  constructor(private router: Router, private achievementService: AchievementService) { }

  Achievement: Achievement[] = [];

  ngOnInit() {

    this.getAwards();

  }

  getAwards() {
    this.achievementService.getAllAchievement().subscribe(Achievement => this.Achievement = Achievement);
  }

  addAchievement() {
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }


}



