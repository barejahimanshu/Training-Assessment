import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentSubjectComponent } from './parent-subject/parent-subject.component';
import { Sibling1Component } from './parent-subject/sibling1/sibling1.component';
import { Subject2Component } from './parent-subject/subject2/subject2.component';
import { Subject3Component } from './parent-subject/subject3/subject3.component';
import { Subject4Component } from './parent-subject/subject4/subject4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataSharingService } from './data-sharing.service';

const routes: Routes = [
  {
    path: '',
    component: ParentSubjectComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class Child4RoutingModule { }


@NgModule({
  declarations: [ParentSubjectComponent, Sibling1Component, Subject2Component, Subject3Component, Subject4Component],
  imports: [
    CommonModule,
    Child4RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers:[DataSharingService]
})
export class Child4Module { }
