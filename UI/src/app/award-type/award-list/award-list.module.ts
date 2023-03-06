import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AwardListComponent } from './award-list.component';
import { AwardFormComponent } from '../award-form/award-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AwardListComponent, AwardFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AwardListComponent
      },
      {
        path:'create',
        component:AwardFormComponent
      },
      {
        path:'edit/:id',
        component:AwardFormComponent
      }
    
    ])
  ]
})
export class AwardListModule { }
