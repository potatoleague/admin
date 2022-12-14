import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { ControlHeadComponent } from './componentes/control-head/control-head.component';
import { ControlCreateComponent } from './componentes/control-create/control-create.component';
import { ControlUpdateComponent } from './componentes/control-update/control-update.component';
import { InitComponent } from './componentes/init/init.component';


@NgModule({
  declarations: [
    ControlHeadComponent,
    ControlCreateComponent,
    ControlUpdateComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
