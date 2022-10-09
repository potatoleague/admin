import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerHeadComponent } from './componentes/player-head/player-head.component';
import { PlayerCreateComponent } from './componentes/player-create/player-create.component';
import { PlayerUpdateComponent } from './componentes/player-update/player-update.component';
import { InitComponent } from './componentes/init/init.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    PlayerHeadComponent,
    PlayerCreateComponent,
    PlayerUpdateComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule
  ]
})
export class PlayersModule { }
