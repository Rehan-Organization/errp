import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './leaderboard.component';


@NgModule({
  declarations: [LeaderboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{
      path:'',
      component:LeaderboardComponent

    }])
  ]
})
export class LeaderboardModule { }
