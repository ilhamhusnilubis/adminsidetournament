import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lispanitaturnamen } from './listtable.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListtableService {
  //private _url: string ="https://s1mple-tours-be.herokuapp.com/admin/comitte/5fd859ce3394930017d33f3d?page=1";

  constructor(private http: HttpClient) {}
  getListtable(lurahId: string, page: number): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}admin/comitte/${lurahId}?page=${page}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
