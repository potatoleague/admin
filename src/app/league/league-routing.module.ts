import { LeagueConfigComponent } from './componentes/league-config/league-config.component';
import { LeagueUpdateComponent } from './componentes/league-update/league-update.component';
import { LeagueCreateComponent } from './componentes/league-create/league-create.component';
import { LeagueHeadComponent } from './componentes/league-head/league-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent,
    children: [
      { path: '', component: LeagueHeadComponent },
      { path: 'new', component: LeagueCreateComponent },
      { path: 'update/:id', component: LeagueUpdateComponent },
      { path: ':id/config', component: LeagueConfigComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
