import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginCanActivateGuard } from './login-can-activate.service';

const routes: Routes = [
    { path: '', component: AuthComponent, canActivate: [LoginCanActivateGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}

