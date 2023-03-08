import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFeedbackComponent } from './view-feedback.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [ViewFeedbackComponent,AddFeedbackComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    RouterModule.forChild([
      {path:'', component:ViewFeedbackComponent},
      {path:'add',component:AddFeedbackComponent},
      { path: 'add/:id', component: AddFeedbackComponent }
    ])
  ]
})
export class ViewFeedbackModule { }
