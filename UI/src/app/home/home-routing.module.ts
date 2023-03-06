import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from '../feedback/add-feedback/add-feedback.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
children:[  {
    path:'recordFeedback',
    loadChildren: () => import('../feedback/add-feedback/add-feedback.module').then( m => m.AddFeedbackModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
