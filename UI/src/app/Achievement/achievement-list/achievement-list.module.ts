import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AchievementListComponent } from './achievement-list.component';
import { AchievementFormComponent } from '../achievement-form/achievement-form.component';



@NgModule({
  declarations: [AchievementListComponent, AchievementFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: AchievementListComponent
    },
    {
      path: 'addAchievement',
      component: AchievementFormComponent
    },
    {
      path: 'Achievement/:id',
      component: AchievementFormComponent
    }
  ])
  ]
})
export class MyAchievementModule { }
