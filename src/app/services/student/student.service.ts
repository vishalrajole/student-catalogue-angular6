import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = 'http://localhost:8000/students';
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentByRollNo(rollno: string) {
    return this.http.get<Student>(this.baseUrl + '/' + rollno);
  }
  addStudent(student: Student) {
    return this.http.post(this.baseUrl, student);
  }
  editStudent(student: Student) {
    return this.http.patch(this.baseUrl + '/' + student.rollno, student);
  }
}
