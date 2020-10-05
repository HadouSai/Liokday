import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'todo',
        loadChildren: () => import('../pages/todo/todo.module').then(m => m.TodoModule)
      },{
        path: 'signup',
        loadChildren: () => import('../pages/sign-up/sign-up.module').then(m => m.SignUpModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
