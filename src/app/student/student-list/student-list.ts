import { Component, OnInit, signal, computed } from '@angular/core';
import { IStudent, Student } from '../../services/student/student';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {

  searchTerm = signal<string>("")
  students = signal<IStudent[]>([])
  filteredStudents = computed(() => this.students().filter(s => s.name.toLowerCase().includes(this.searchTerm().toLowerCase())))

  constructor(private studentService: Student, private router: Router){

  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students.set(students)
    })
  }

  onDelete(id: number): void {
    this.studentService.deleteStudent(id)
  }

  onEdit(id: number): void{
    this.router.navigate(['/students/edit', id])
  }
 }
