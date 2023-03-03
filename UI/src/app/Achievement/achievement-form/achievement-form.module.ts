import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementFormComponent } from './achievement-form.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AchievementFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: AchievementFormComponent
    }])
  ]
})
export class AddAchievementModule { }
