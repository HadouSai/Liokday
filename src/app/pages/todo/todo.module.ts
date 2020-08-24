import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo.routing';
import { TodoComponent } from './todo.component';
import { TodoListModule } from './todo-list/todo-list.module';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoListModule,
    TodoRoutingModule
  ],
  exports: [],
  providers: [],
})
export class TodoModule { }
