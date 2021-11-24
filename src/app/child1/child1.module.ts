import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from  '@angular/router';

import { CompComponent } from './comp/comp.component';

const routes: Routes = [
  {
    path: '',
    component: CompComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class Child1RoutingModule { }

@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule,
    Child1RoutingModule,
  ],
})
export class Child1Module { }
