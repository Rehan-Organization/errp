import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardFormComponent } from './award-form.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AwardFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component:AwardFormComponent
      }
    ])
  ]
})
export class AwardFormModule { }
