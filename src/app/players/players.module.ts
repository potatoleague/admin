import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerHeadComponent } from './componentes/player-head/player-head.component';
import { PlayerCreateComponent } from './componentes/player-create/player-create.component';
import { PlayerUpdateComponent } from './componentes/player-update/player-update.component';


@NgModule({
  declarations: [
    PlayerHeadComponent,
    PlayerCreateComponent,
    PlayerUpdateComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
