import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TodoListComponent],
  providers: [],
})
export class TodoListModule { }
