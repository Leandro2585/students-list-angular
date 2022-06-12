import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = []
  constructor() {
    this.loadStudents()
  }

  private loadStudents() {
    this.students.push(new Student(1, 'João', 'joao@gmail.com', '2003-04-03'))
    this.students.push(new Student(2, 'Jose', 'jose@gmail.com', '2003-04-03'))
    this.students.push(new Student(3, 'Ana', 'ana@gmail.com', '2003-04-03'))
  }

  findAll(): Student[] {
    return this.students
  }

  findById(id: number) {
    return this.students.find(student => student.id === id)
  }

  delete(id: number) {
    const index = this.students.findIndex(student => student.id === id)
    this.students.splice(index, 1)
  }

  update(id: number, student: Student) {
    const index = this.students.findIndex(student => student.id === id)
    this.students.splice(index, 1, student)
  }

  save(student: Student) {
    student.id = this.autoIncrement()
    this.students.push(student)
  }

  private autoIncrement() {
    let lastId = 0
    if(this.students.length > 0) {
      lastId = Math.max(...this.students.map(student => student.id))
    }

    return ++lastId
  }
}
