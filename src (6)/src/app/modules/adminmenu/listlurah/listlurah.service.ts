import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datalurah } from './listlurah.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListlurahService {
  private _url: string ="assets/data/listtable.json";

  constructor(private http: HttpClient) { }
  getListlurah():Observable<datalurah[]>{
  return this.http.get<datalurah[]>(this._url);
  }
}
