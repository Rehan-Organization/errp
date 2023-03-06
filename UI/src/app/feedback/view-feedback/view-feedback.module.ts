import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFeedbackComponent } from './view-feedback.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';

@NgModule({
  declarations: [ViewFeedbackComponent,AddFeedbackComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {path:'', component:ViewFeedbackComponent},
      {path:'add',component:AddFeedbackComponent}
    ])
  ]
})
export class ViewFeedbackModule { }
