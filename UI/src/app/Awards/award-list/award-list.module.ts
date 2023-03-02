import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AwardListComponent } from './award-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AwardListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path:'',
        component:AwardListComponent,
        
      },
      {
        path:'raiseAward',
        loadChildren:()=>import("../award-form/award-form.module").then(m=>m.AwardFormModule)
      }
    ]),
    
  
  ]
})
export class AwardListModule { }
