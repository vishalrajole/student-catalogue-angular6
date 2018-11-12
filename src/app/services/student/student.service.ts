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

  getStudentsByPagination(skipCount) {
    return this.http.get<Student[]>(`${this.baseUrl}`, {
      params: {
        skipCount: skipCount
      }
    });
  }

  getStudentByRollNo(rollno: string) {
    return this.http.get(this.baseUrl + '/' + rollno);
  }
  addStudent(student: Student) {
    return this.http.post(this.baseUrl, student);
  }
  editStudent(student: Student) {
    return this.http.patch(this.baseUrl + '/' + student.rollno, student);
  }
  searchStudent(term: string) {
    return this.http.get<Student[]>(`${this.baseUrl}/search/${term}`);
  }
}
