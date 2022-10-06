import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHeadComponent } from './componentes/user-head/user-head.component';
import { UserCreateComponent } from './componentes/user-create/user-create.component';
import { UserUpdateComponent } from './componentes/user-update/user-update.component';


@NgModule({
  declarations: [
    UserHeadComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
