import { TeamIdComponent } from './componentes/team-id/team-id.component';
import { TeamUpdateComponent } from './componentes/team-update/team-update.component';
import { TeamCreateComponent } from './componentes/team-create/team-create.component';
import { TeamHeadComponent } from './componentes/team-head/team-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent,
    children: [
      { path: '', component: TeamHeadComponent },
      { path: 'cadastrar', component: TeamCreateComponent },
      { path: 'update/:id', component: TeamUpdateComponent },
      { path: ':apelido/:id', component: TeamIdComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
