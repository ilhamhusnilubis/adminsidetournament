import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/token.service';
import { TournamentModel } from 'src/app/models/tournament.interface';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-listturnamen',
  templateUrl: './listturnamen.component.html',
  styleUrls: ['./listturnamen.component.scss'],
})
export class ListturnamenComponent implements OnInit {
  tournamentData: TournamentModel[];
  page: number;

  constructor(
    private tournamentService: TournamentService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getIndexTournament();
  }

  getIndexTournament() {
    const comittePayload = this.tokenService.getPayloadData;
    this.tournamentService
      .getIndexTournamentByDistrict(comittePayload.userId)
      .subscribe(
        (res: any) => {
          this.tournamentData = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
