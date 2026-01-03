import { Routes } from '@angular/router';
import { StudentList } from './student/student-list/student-list';
import { StudentForm } from './student/student-form/student-form';
import { TodoComponent } from './todo-component/todo-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ReactiveFormComponent } from './reactive-form-component/reactive-form-component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'students', component: StudentList },
  { path: 'students/add', component: StudentForm },
  { path: 'students/edit/:id', component: StudentForm },
  { path: 'todos', component: TodoComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];
