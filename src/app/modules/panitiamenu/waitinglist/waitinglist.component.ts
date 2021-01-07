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
    let _id = this.route.snapshot.paramMap.get('_id');
    this.tournamentService.getWaitingList(_id).subscribe((tournament: any) => {
      this.tournamentData = tournament;
    });
  }
  updateApproval(id: string, approveValue: string) {
    const approvalFormat = {
      userId: id,
      approval: approveValue,
    };
    this.tournamentService.updateApprovalUser(
      this.tournamentData._id,
      approvalFormat
    );
  }
  updateApprovalTeam(id: string, approveValue: string) {
    const approvalFormat = {
      teamId: id,
      approval: approveValue,
    };
    this.tournamentService.updateApprovalTeam(
      this.tournamentData._id,
      approvalFormat
    );
  }
}
