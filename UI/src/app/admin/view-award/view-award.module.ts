import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewAwardComponent } from './view-award.component';
import { CreateAwardComponent } from '../create-award/create-award.component';



@NgModule({
  declarations: [ViewAwardComponent, CreateAwardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewAwardComponent
      },
      {
        path:'create',
        component:CreateAwardComponent
      }
    ])
  ]
})
export class ViewAwardModule { }
