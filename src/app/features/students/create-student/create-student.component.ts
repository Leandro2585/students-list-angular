import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
  }).getRawValue();

  constructor(private router: Router,private studentService: StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.save(this.student as Student)
    this.router.navigateByUrl("/students")
  }
}
