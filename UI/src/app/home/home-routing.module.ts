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
        loadChildren: () => import('./../admin/view-award/view-award.module').then(m => m.ViewAwardModule)
      },
      {
        path:'create',
        loadChildren: () => import('./../admin/create-award/create-award.module').then(m => m.CreateAwardModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
