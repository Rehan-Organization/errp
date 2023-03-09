import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';


@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  //achievement : Achievement[] = [];

  

  constructor(
    private router:Router, 
    private achievementService : AchievementService,
    private alertController:AlertController
    ) {}

  achievements : Achievement[] = [];
  pageNo:number = 0
  pageSize:number = 4
  errorMessage = ""


  ngOnInit() {

    this.getAchievement(false,null);

  }

  refreshList(){
    this.pageNo = 0;
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
  submitAchievement(achievement:Achievement){
    this.alertController
        .create({
            header: 'Alert',
            message: 'Are you sure you want to submit?',
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => {
                        this.achievementService.submitAchievement(achievement).subscribe(
                            (resp) => {
                               
                                console.log(resp);
                            },
                            (err) => {
                                (this.errorMessage = err.message),
                                    this.showAlert(this.errorMessage);
                            }
                        );
                    },
                },
                {
                    text: 'Cancel',
                },
            ],
        })
        .then((res) => {
            res.present();
        });
  }

  addAchievement(){
    this.router.navigate(["/home/myAchievement/addAchievement"])
  }
  deleteAchievement(achievement: Achievement) {
    this.alertController
        .create({
            header: 'Confirm Alert',
            message: 'Are you sure you want to delete?',
            buttons: [
                {
                    text: 'Confirm',
                    handler: () => {
                        this.achievementService.deleteAchievement(achievement.achievementId).subscribe(
                            (resp) => {
                                this.router.navigate(['/home/myAchievement']);
                                console.log(resp);
                            },
                            (err) => {
                                (this.errorMessage = err.message),
                                    this.showAlert(this.errorMessage);
                            }
                        );
                    },
                },
                {
                    text: 'Cancel',
                },
            ],
        })
        .then((res) => {
            res.present();
        });
}
showAlert(message: string) {
    this.alertController
        .create({
            header: 'Alert',
            message: message,
            buttons: [
                {
                    text: 'Ok',
                },
            ],
        })
        .then((res) => {
            res.present();
        });
}





  // editAchievement(){
  //   this.router.navigate(["/home/myAchievement/editAchievement/"+this.achievements.achievementId])
  //   this.achievementService.getAchievement(this.userId).subscribe(achievement => this.achievements = achievement);
  // }

  handleUpdate(event:Event){
    console.log(event);
  }

}
  


