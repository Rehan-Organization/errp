import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'awardTypes',
        loadChildren: () => import('../award-type/award-list/award-list.module').then(m => m.AwardListModule)
      },
      {
        path:'create',
        loadChildren: () => import('../award-type/award-form/award-form.module').then(m => m.AwardFormModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
