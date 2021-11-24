import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from  '@angular/router';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: GridComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class Child2RoutingModule { }

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    Child2RoutingModule,
    FormsModule
  ]
})
export class Child2Module { }
