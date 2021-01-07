import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/auth/token.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-addturnament',
  templateUrl: './addturnament.component.html',
  styleUrls: ['./addturnament.component.scss'],
})
export class AddturnamentComponent implements OnInit {
  tournamentForm: FormGroup;

  constructor(
    private tournamentService: TournamentService,
    private fb: FormBuilder,
    private token: TokenService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  private initForm() {
    this.tournamentForm = this.fb.group({
      name: [''],
      category: [''],
      tournamentType: [''],
      ageRange: [''],
      prizePool: this.fb.group({
        firstPrize: Number,
        secondPrize: Number,
        thirdPrize: Number,
      }),
    });
  }

  newTournament() {
    const comittePayload = this.token.getPayloadData;
    this.tournamentService.createTournament(
      comittePayload.userId,
      this.tournamentForm.value
    );
  }
}
