import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { dataparticipant } from './editparticipant.component'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditparticipantService {

  private _url: string ="assets/data/dataparticipant.json";

  constructor(private http: HttpClient) { }
  getEditparticipant():Observable<dataparticipant[]>{
  return this.http.get<dataparticipant[]>(this._url);
  }
}
