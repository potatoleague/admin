import { LoginRefreshComponent } from './components/login-refresh/login-refresh.component';
import { LoginCreateComponent } from './components/login-create/login-create.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent, children: [
    { path: '', component: LoginUserComponent },
    { path: 'cadastro', component:LoginCreateComponent },
    { path: 'recuperar-senha', component: LoginRefreshComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
