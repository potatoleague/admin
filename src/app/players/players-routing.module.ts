import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';
import { PlayerHeadComponent } from './componentes/player-head/player-head.component';

const routes: Routes = [
  { path: '', component: InitComponent, children:
    [
      { path: '', component: PlayerHeadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
