import { Component, OnInit } from '@angular/core';
import { IStudent, Student } from '../../services/student';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnInit{
   student: IStudent = { id: 0, name: '', age: 0, grade: '' };
  isEditMode = false;

  constructor(private studentService: Student, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const studentId = +this.route.snapshot.paramMap.get('id')!;
    if (studentId) {
      this.isEditMode = true;
      this.student = this.studentService.getStudentById(studentId)!;
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student);
    } else {
      this.student.id = Date.now();
      this.studentService.addStudent(this.student);
    }

    this.router.navigate(['/students']);
  }
}
