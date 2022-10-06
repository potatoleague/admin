import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamHeadComponent } from './componentes/team-head/team-head.component';
import { TeamCreateComponent } from './componentes/team-create/team-create.component';
import { TeamUpdateComponent } from './componentes/team-update/team-update.component';


@NgModule({
  declarations: [
    TeamHeadComponent,
    TeamCreateComponent,
    TeamUpdateComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
