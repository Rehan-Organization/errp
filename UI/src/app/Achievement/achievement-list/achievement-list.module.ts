import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AchievementListComponent } from './achievement-list.component';
import { AchievementFormComponent } from '../achievement-form/achievement-form.component';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [AchievementListComponent, AchievementFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    MomentModule,
    FormsModule,
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
        path: 'editAchievement/:id',
        component: AchievementFormComponent
      }
    ])
  ]
})
export class AchievementListModule { }
