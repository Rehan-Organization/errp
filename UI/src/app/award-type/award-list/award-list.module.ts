import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AwardListComponent } from './award-list.component';
import { AwardFormComponent } from '../award-form/award-form.component';



@NgModule({
  declarations: [AwardListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AwardListComponent
      },
      {
        path:'create',
        component:AwardFormComponent
      }
    ])
  ]
})
export class AwardListModule { }
