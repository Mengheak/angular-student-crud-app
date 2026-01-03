import { Injectable, signal, WritableSignal } from '@angular/core';
import { Todo } from '../../todo-component/todo-component';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private message = signal<string>('');

  private todos: Todo[] = [
    { id: crypto.randomUUID(), text: 'Play game', createdAt: new Date(), done: false },
  ];

  getAll(): Todo[] {
    return this.todos;
  }
  getMessage(): WritableSignal<string> {
    return this.message;
  }
  addTodo(newText: string): void {
    const text = newText.trim();
    if (!text.trim()) {
      this.message.set('Title is required!')
      return;
    }
    const todo: Todo = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date(),
      done: false,
    };
    this.todos.push(todo);
    newText = '';
  }
  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  remove(id: string) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  clearDone() {
    this.todos = this.todos.filter((t) => !t.done);
  }

  // getTodosPage(page: number, pageSize: number): Observable<{ items: Todo[]; total: number }> {
  //   const start = (page -1) * pageSize;
  //   const params = new HttpParams().set('_start', String(start)).set('_limit', String(pageSize));

  // }
}
