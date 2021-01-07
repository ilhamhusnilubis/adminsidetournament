import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get isLogedIn(): boolean {
    const token = localStorage.getItem('Token');
    return token !== null ? true : false;
  }
  getToken(): string {
    return localStorage.getItem('Token');
  }

  get getPayloadData(): any {
    return JSON.parse(localStorage.getItem('Payload'));
  }
}
