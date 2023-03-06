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
        path:'leaderboard',
        loadChildren: () => import('../leaderboard/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
