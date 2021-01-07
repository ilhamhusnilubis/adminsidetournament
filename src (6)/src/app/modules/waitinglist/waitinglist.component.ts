import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApprovalStatus } from 'src/app/models/enum.interface';
import { TournamentModel } from 'src/app/models/tournament.interface';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-waitinglist',
  templateUrl: './waitinglist.component.html',
  styleUrls: ['./waitinglist.component.scss'],
})
export class WaitinglistComponent implements OnInit {
  tournamentData: TournamentModel;
  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDataWaitingList();
  }
  getDataWaitingList() {
    let id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.getWaitingList(id).subscribe((tournament) => {
      this.tournamentData = tournament;
    });
  }
  updateApproval(id: string, approve: ApprovalStatus) {}
}
