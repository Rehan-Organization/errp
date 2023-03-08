// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AchievementFormComponent } from './achievement-form.component';
// import { IonicModule } from '@ionic/angular';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: AchievementFormComponent
    }])
  ]
})
export class AddAchievementModule { }
