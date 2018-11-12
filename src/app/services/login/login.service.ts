import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'http://localhost:8000/login';
  errortext: string = '';
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl, { username: username, password: password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('loggedUser', JSON.stringify(user));
          console.log(`login success: ${user}`);
        }
        return user;
      }));
  }

  logout() {
    console.log('user is logged out');
    localStorage.removeItem('loggedUser');
  }
}
