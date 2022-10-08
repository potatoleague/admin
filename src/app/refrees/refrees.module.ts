import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefreesRoutingModule } from './refrees-routing.module';
import { RefreeCreateComponent } from './componentes/refree-create/refree-create.component';
import { RefreeHeadComponent } from './componentes/refree-head/refree-head.component';
import { RefreeUpdateComponent } from './componentes/refree-update/refree-update.component';
import { InitComponent } from './componentes/init/init.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    RefreeCreateComponent,
    RefreeHeadComponent,
    RefreeUpdateComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    RefreesRoutingModule,
    MaterialModule
  ]
})
export class RefreesModule { }
