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

<<<<<<< Updated upstream
  //achievement : Achievement[] = [];
  userId = 2
=======
  
>>>>>>> Stashed changes

  constructor(private router:Router, private achievementService : AchievementService) {}

  achievements : Achievement[] = [];

  ngOnInit() {

    this.getAchievement();

  }

  getAchievement()
  {
<<<<<<< Updated upstream
    this.achievementService.getAllAchievement(this.userId).subscribe(Achievement => this.Achievement = Achievement);
=======
    this.achievementService.getAllAchievement().subscribe(Achievement => this.achievements = Achievement);
>>>>>>> Stashed changes
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  

}
  


