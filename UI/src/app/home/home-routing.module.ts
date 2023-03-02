import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from '../feedback/add-feedback/add-feedback.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: ([{
      path:'addfeedback', component:AddFeedbackComponent
    }])
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
