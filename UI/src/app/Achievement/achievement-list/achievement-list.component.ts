import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Achievement } from '../achievement';
import { AchievementService } from '../achievement.service';

@Component({
    selector: 'app-achievement-list',
    templateUrl: './achievement-list.component.html',
    styleUrls: ['./achievement-list.component.scss'],
})
export class AchievementListComponent implements OnInit {

  httpClient: any;
  achievements: Achievement[];
  errorMessage = ""

  constructor(
    private router:Router, 
    private achievementService : AchievementService,
    private activatedRoute:ActivatedRoute,
    private alertController:AlertController
    ) {}

    ngOnInit() {
        this.getAchievement();
    }

    getAchievement() {
        this.achievementService
            .getAllAchievement()
            .subscribe((Achievement) => (this.achievements=Achievement));
    }

    addAchievement() {
        this.router.navigate(['/home/myAchievement/addAchievement']);
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
}





  // editAchievement(){
  //   this.router.navigate(["/home/myAchievement/editAchievement/"+this.achievements.achievementId])
  //   this.achievementService.getAchievement(this.userId).subscribe(achievement => this.achievements = achievement);
  // }

//   handleUpdate(event:Event){
//     console.log(event);
//   }

//         this.alertController
//             .create({
//                 header: 'Confirm Alert',
//                 message: 'Are you sure you want to delete?',
//                 buttons: [
//                     {
//                         text: 'Confirm',
//                         handler: () => {
//                             this.achievementService.deleteAchievement(achievement.achievementId).subscribe(
//                                 (resp) => {
//                                     this.router.navigate(['/home/myAchievement']);
//                                     console.log(resp);
//                                 },
//                                 (err) => {
//                                     (this.errorMessage = err.message),
//                                         this.showAlert(this.errorMessage);
//                                 }
//                             );
//                         },
//                     },
//                     {
//                         text: 'Cancel',
//                     },
//                 ],
//             })
//             .then((res) => {
//                 res.present();
//             });
//     }
//     showAlert(message: string) {
//         this.alertController
//             .create({
//                 header: 'Alert',
//                 message: message,
//                 buttons: [
//                     {
//                         text: 'Ok',
//                     },
//                 ],
//             })
//             .then((res) => {
//                 res.present();
//             });
//     }
// }

