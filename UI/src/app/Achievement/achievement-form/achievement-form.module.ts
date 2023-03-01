import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAchievementComponent } from './achievement-form.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddAchievementComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: AddAchievementComponent
    }])
  ]
})
export class AddAchievementModule { }
