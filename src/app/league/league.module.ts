import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueHeadComponent } from './componentes/league-head/league-head.component';
import { LeagueCreateComponent } from './componentes/league-create/league-create.component';
import { LeagueUpdateComponent } from './componentes/league-update/league-update.component';
import { InitComponent } from './componentes/init/init.component';import { LeagueConfigComponent } from './componentes/league-config/league-config.component';
import { RoundsComponent } from './componentes/rounds/rounds.component';
import { ContractsComponent } from './componentes/contracts/contracts.component';


@NgModule({
  declarations: [
    LeagueHeadComponent,
    LeagueCreateComponent,
    LeagueUpdateComponent,
    InitComponent,
    LeagueConfigComponent,
    RoundsComponent,
    ContractsComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MaterialModule,
  ]
})
export class LeagueModule { }
