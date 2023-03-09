import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  //achievement : Achievement[] = [];
  userId = 1
  httpClient: any;
  achievement: Achievement[];

  constructor(
    private router:Router, 
    private achievementService : AchievementService,
    private activatedRoute:ActivatedRoute,) {}

  achievements : Achievement[] = [];

  ngOnInit() {
    
    
    
    this.getAchievement();
   // this.editAchievement();

  }

  getAchievement()
  {
    this.achievementService.getAllAchievement().subscribe(achievement => this.achievements = achievement);
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }

  // editAchievement(){
  //   this.router.navigate(["/home/myAchievement/editAchievement/"+this.achievements.achievementId])
  //   this.achievementService.getAchievement(this.userId).subscribe(achievement => this.achievements = achievement);
  // }

  handleUpdate(event:Event){
    console.log(event);
  }

}
  


