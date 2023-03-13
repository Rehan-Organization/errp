import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './providers/app-auth-guard.service';
import { UserContextResolver } from './providers/user-context-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AppAuthGuard],
    resolve: [UserContextResolver]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'award-list',
    loadChildren: () => import('./Awards/award-list/award-list.module').then(m => m.AwardListModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
