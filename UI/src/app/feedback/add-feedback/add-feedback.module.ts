import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFeedbackComponent } from './add-feedback.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddFeedbackComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{path:'', component:AddFeedbackComponent}])
    
  ]
})
export class AddFeedbackModule { }
