import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AllComponent } from './components/all/all.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AllComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialModule
  ]
})
export class ViewsModule { }
