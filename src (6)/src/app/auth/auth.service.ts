import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  login(login: Login) {
    return this.http.post<any>(`${environment.baseUrl}auth/admin/login`, login).subscribe(
      (sucess) => {
        localStorage.setItem('Token', sucess.token);
        localStorage.setItem('Payload', JSON.stringify(sucess.payload));
        this.route.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    const token = localStorage.removeItem('Token');
    const payload = localStorage.removeItem('Payload');
    this.route.navigate(['/']);
  }

  createLurah(lurahRegister: any) {
    return this.http.put(`${environment.baseUrl}admin/register`, lurahRegister).subscribe(
      (success) => {
        window.alert('Berhasil menambah lurah');
      },
      (error) => {
        window.alert(error);
      }
    );
  }

  createPanitia(lurahId: string, panitiaRegister: any) {
    return this.http
      .put(`${environment.baseUrl}admin/${lurahId}/register/comitte`, panitiaRegister)
      .subscribe(
        (success) => {
          window.alert('Berhasil menambah panitia');
        },
        (error) => {
          window.alert(error.error.message);
        }
      );
  }
}
