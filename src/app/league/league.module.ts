import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueHeadComponent } from './componentes/league-head/league-head.component';
import { LeagueCreateComponent } from './componentes/league-create/league-create.component';
import { LeagueUpdateComponent } from './componentes/league-update/league-update.component';
import { InitComponent } from './componentes/init/init.component';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    LeagueHeadComponent,
    LeagueCreateComponent,
    LeagueUpdateComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MaterialModule,
  ]
})
export class LeagueModule { }
