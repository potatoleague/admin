import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'painel-controle',
    loadChildren: () => import('./league/league.module').then(m => m.LeagueModule)
  },
  {
    path: 'atletas',
    loadChildren: () => import('./players/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'arbitros',
    loadChildren: () => import('./refrees/refrees.module').then(m => m.RefreesModule)
  },
  {
    path: 'times',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
