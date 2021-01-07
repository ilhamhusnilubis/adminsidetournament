import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/auth/token.service';
import { CategoryModel } from 'src/app/models/category.interface';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-addturnament',
  templateUrl: './addturnament.component.html',
  styleUrls: ['./addturnament.component.scss'],
})
export class AddturnamentComponent implements OnInit {
  tournamentForm: FormGroup;
  categoryList: CategoryModel;

  constructor(
    private tournamentService: TournamentService,
    private fb: FormBuilder,
    private token: TokenService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getOptionCategory();
  }

  getOptionCategory() {
    const comitteData = this.token.getPayloadData;
    this.tournamentService.getAvailableCategory(comitteData.userId).subscribe(
      (res: any) => {
        this.categoryList = res.resultAvailableCategory;
      },
      (error: any) => {}
    );
  }

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
      permalink: [''],
      rule: [''],
    });
  }

  newTournament() {
    const comittePayload = this.token.getPayloadData;
    this.tournamentService.createTournament(
      comittePayload.userId,
      this.tournamentForm.value
    );
    console.log(this.tournamentForm.value);
  }
}
