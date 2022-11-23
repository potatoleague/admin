import { LeagueConfigComponent } from './componentes/league-config/league-config.component';
import { LeagueUpdateComponent } from './componentes/league-update/league-update.component';
import { LeagueCreateComponent } from './componentes/league-create/league-create.component';
import { LeagueHeadComponent } from './componentes/league-head/league-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';
import { RoundsComponent } from './componentes/rounds/rounds.component';
import { ContractsComponent } from './componentes/contracts/contracts.component';

const routes: Routes = [
  { path: '', component: InitComponent,
    children: [
      { path: '', component: LeagueHeadComponent },
      { path: 'new', component: LeagueCreateComponent },
      { path: 'update/:id', component: LeagueUpdateComponent },
      { path: ':id/config', component: LeagueConfigComponent },
      { path: 'partidas', component: RoundsComponent },
      { path: 'contratos', component:ContractsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
