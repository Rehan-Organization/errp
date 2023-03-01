import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MyAchievementComponent } from './achievement-list.component';
import { AddAchievementComponent } from '../achievement-form/achievement-form.component';



@NgModule({
  declarations: [MyAchievementComponent, AddAchievementComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: MyAchievementComponent
    },
    {
      path: 'addAchievement',
      component: AddAchievementComponent
    },
  ])
  ]
})
export class MyAchievementModule { }
