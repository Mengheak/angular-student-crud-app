import { Routes } from '@angular/router';
import { StudentList } from './student/student-list/student-list';
import { StudentForm } from './student/student-form/student-form';

export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentList },
  { path: 'students/add', component: StudentForm },
  { path: 'students/edit/:id', component: StudentForm },
];
