import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-1',
    loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module),

  },
  {
    path: 'route-2',
    loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module)
  },
  {
    path: 'route-3',
    loadChildren: () => import('./child3/child3.module').then(m => m.Child3Module)
  },
  {
    path: 'route-4',
    loadChildren: () => import('./child4/child4.module').then(m => m.Child4Module)
  },
  {
    path: 'route-5',
    loadChildren: () => import('./child5/child5.module').then(m => m.Child5Module)
  },
  {
    path: 'route-6',
    loadChildren: () => import('./child6/child6.module').then(m => m.Child6Module)
  },
  {
    path: '',
    redirectTo: 'route-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
