import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamHeadComponent } from './componentes/team-head/team-head.component';
import { TeamCreateComponent } from './componentes/team-create/team-create.component';
import { TeamUpdateComponent } from './componentes/team-update/team-update.component';
import { MaterialModule } from '../shared/material.module';
import { InitComponent } from './componentes/init/init.component';


@NgModule({
  declarations: [
    TeamHeadComponent,
    TeamCreateComponent,
    TeamUpdateComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MaterialModule
  ]
})
export class TeamsModule { }
