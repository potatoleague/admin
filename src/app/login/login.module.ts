import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginRefreshComponent } from './components/login-refresh/login-refresh.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginCreateComponent } from './components/login-create/login-create.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    LoginRefreshComponent,
    LoginUserComponent,
    LoginCreateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
