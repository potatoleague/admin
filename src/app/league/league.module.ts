import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueHeadComponent } from './componentes/league-head/league-head.component';
import { LeagueCreateComponent } from './componentes/league-create/league-create.component';
import { LeagueUpdateComponent } from './componentes/league-update/league-update.component';


@NgModule({
  declarations: [
    LeagueHeadComponent,
    LeagueCreateComponent,
    LeagueUpdateComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ]
})
export class LeagueModule { }
