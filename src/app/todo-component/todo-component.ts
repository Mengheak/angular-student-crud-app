import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo/todo-service';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-todo-component',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './todo-component.html',
})
export class TodoComponent {
  todoService = inject(TodoService);

  newText = '';

  get todos(): Todo[] {
    return this.todoService.getAll();
  }

  get message(): WritableSignal<string> {
    return this.todoService.getMessage();
  }

  addTodo(): void {
    this.todoService.addTodo(this.newText);
  }

  clearDone(): void {
    this.todoService.clearDone();
  }

  toggle(todo: Todo): void {
    this.todoService.toggle(todo);
  }
  remove(id: string): void {
    this.todoService.remove(id);
  }
}
