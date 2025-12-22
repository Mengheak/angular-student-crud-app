import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IStudent {
  id: number;
  name: string;
  age: number;
  grade: string;
}



@Injectable({
  providedIn: 'root',
})
export class Student {

  private students: IStudent[] = [
    { id: 1, name: 'John Doe', age: 18, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 20, grade: 'B' }
  ];

  private studentSubject = new BehaviorSubject<IStudent[]>(this.students);
  constructor() {}

  getStudents(): Observable<IStudent[]> {
    return this.studentSubject.asObservable();
  }

  getStudentById(id: number):IStudent | undefined {
    return this.students.find((s) => s.id === id)
  }

  addStudent(student: IStudent): void {
    this.students.push(student);
    this.studentSubject.next(this.students);
  }

  updateStudent(updatedStudent: IStudent): void {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
      this.studentSubject.next(this.students);
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    this.studentSubject.next(this.students);
  }

  searchStudent(term: string): void {
    this.students = this.students.filter(s => s.name.includes(term))
  }
}
