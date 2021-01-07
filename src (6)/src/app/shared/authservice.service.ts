import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http:HttpClient) { }
  login(data):Observable<any>{
    return this.http.post(`${baseUrl}asdf/asdf`,data);
  }
}
