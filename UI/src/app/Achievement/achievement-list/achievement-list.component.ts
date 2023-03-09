import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console, error } from 'console';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  //achievement : Achievement[] = [];


  constructor(private router:Router, private achievementService : AchievementService) {}

  achievements : Achievement[] = [];
  pageNo:number = 0
  pageSize:number = 4


  ngOnInit() {

    this.getAchievement(false,null);

  }

  onIonInfinite(ev:Event) {
    
    
    this.getAchievement(true,ev)

    
  }

  getAchievement(isFirstLoad:boolean,event:any)
  {

    

    this.achievementService.getPaginatedAchievement(this.pageNo,this.pageSize).subscribe(data =>{
      for(let i=0;i<data.length;i++)
      {
        this.achievements.push(data[i]);
      }
      if(isFirstLoad)
      {
        event.target.complete();
      }
    this.pageNo++;

    },error=>{
      console.error(error);
    })

    
    
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  

}
  


