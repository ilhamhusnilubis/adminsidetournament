import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  ApprovalTournament,
  CreateTournament,
  TournamentModel,
} from '../models/tournament.interface';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  createTournament(comitteId: string, tournamentBody: CreateTournament) {
    return this.http
      .put(
        `${environment.baseUrl}tournament/create/${comitteId}`,
        tournamentBody
      )
      .subscribe(
        (sucess) => {
          window.alert('Berhasil menambahkan tournament');
        },
        (error) => console.log(error)
      );
  }
  getIndexTournamentByDistrict(comitteId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}tournament/${comitteId}?page=1`)
      .pipe(
        map((response: any) => {
          return response.resultIndex.data;
        })
      );
  }

  getAvailableCategory(comitteId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}tournament/category/${comitteId}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  getDetailTournament(tournamentId: string): Observable<TournamentModel> {
    return this.http
      .get(`${environment.baseUrl}tournament/${tournamentId}`)
      .pipe(
        map((response: any) => {
          return response.resultDetailTournament;
        })
      );
  }
  getWaitingList(tournamentId: string): Observable<TournamentModel> {
    return this.http
      .get(`${environment.baseUrl}tournament/waitinglist/${tournamentId}`)
      .pipe(
        map((response: any) => {
          return response.resultWaitingList;
        })
      );
  }
  updateApprovalUser(tournamentId: string, approval: ApprovalTournament) {
    return this.http
      .patch(
        `${environment.baseUrl}tournament/${tournamentId}/userapproval`,
        approval
      )
      .subscribe(
        (sucess: any) => {
          console.log(sucess);
          window.alert(`Anda telah ${approval.approval}`);
        },
        (error) => console.log(error)
      );
  }
  updateApprovalTeam(tournamentId: string, approval: ApprovalTournament) {
    return this.http
      .patch(
        `${environment.baseUrl}tournament/${tournamentId}/teamapproval`,
        approval
      )
      .subscribe(
        (sucess: any) => {
          console.log(sucess);
          window.alert(`Anda telah ${approval.approval}`);
        },
        (error) => console.log(error)
      );
  }
}
