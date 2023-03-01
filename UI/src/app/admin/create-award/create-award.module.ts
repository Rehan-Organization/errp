import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreateAwardComponent } from './create-award.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CreateAwardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateAwardComponent
      }
    ])
   
  ]
})
export class CreateAwardModule { }
