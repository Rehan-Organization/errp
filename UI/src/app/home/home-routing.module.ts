import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[ 
      
        {
          path: 'myAchievement',
          loadChildren: () => import('../Achievement/achievement-list/achievement-list.module').then(m => m.MyAchievementModule)
        },
        {
          path:'myAwards',
          loadChildren:()=>import('../Awards/award-list/award-list.module').then(m=>m.AwardListModule)
        }
      ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
