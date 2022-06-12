import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents()
  }

  onDelete(id: number): void {
    this.studentService.delete(id)
  }

  private loadStudents() {
    console.log('PASSOU AQUI')
    this.students = this.studentService.findAll()
  }

}
