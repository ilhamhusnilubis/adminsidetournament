import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { lispanitaturnamen } from './listtable.component'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListtableService {

  private _url: string ="https://s1mple-tours-be.herokuapp.com/admin/comitte/5fd859ce3394930017d33f3d?page=1";

  constructor(private http: HttpClient) { }
  getListtable():Observable<lispanitaturnamen[]>{
  return this.http.get<lispanitaturnamen[]>(this._url);
  }
  
}
