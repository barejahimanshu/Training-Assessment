import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { InfiniteDirective } from './infinite.directive';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
class Child6RoutingModule { }

@NgModule({
  declarations: [MainComponent, InfiniteDirective],
  imports: [
    CommonModule,
    Child6RoutingModule
  ]
})
export class Child6Module { }
