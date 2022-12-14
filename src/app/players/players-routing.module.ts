import { PlayerIdComponent } from './componentes/player-id/player-id.component';
import { PlayerCreateComponent } from './componentes/player-create/player-create.component';
import { PlayerUpdateComponent } from './componentes/player-update/player-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';
import { PlayerHeadComponent } from './componentes/player-head/player-head.component';

const routes: Routes = [
  { path: '', component: InitComponent, children:
    [
      { path: '', component: PlayerHeadComponent },
      { path: 'cadastrar', component: PlayerCreateComponent },
      { path: ':id', component: PlayerIdComponent },
      { path: 'update/:id', component: PlayerUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
