import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { RouterModule, Routes} from '@angular/router';
import { SortDirective } from './directive/sort.directive';


const routes: Routes = [
  {
    path: '',
    component: DynamicTableComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

class Child5RoutingModule { }

@NgModule({
  declarations: [DynamicTableComponent, SortDirective],
  imports: [
    CommonModule,
    Child5RoutingModule,
  ]
})
export class Child5Module { }
