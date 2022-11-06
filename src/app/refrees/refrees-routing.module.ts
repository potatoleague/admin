import { RefreeCreateComponent } from './componentes/refree-create/refree-create.component';
import { RefreeUpdateComponent } from './componentes/refree-update/refree-update.component';
import { RefreeHeadComponent } from './componentes/refree-head/refree-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './componentes/init/init.component';

const routes: Routes = [
  { path: '', component: InitComponent, children: [
      { path: '', component: RefreeHeadComponent },
      { path: 'arbitro/:id', component: RefreeUpdateComponent },
      { path: 'cadastrar', component: RefreeCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefreesRoutingModule { }
