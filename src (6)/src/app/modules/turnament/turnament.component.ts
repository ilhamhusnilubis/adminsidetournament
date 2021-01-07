import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-turnament',
  templateUrl: './turnament.component.html',
  styleUrls: ['./turnament.component.scss']
})
export class TurnamentComponent implements OnInit {
  name = 'Angular';

  constructor(private route : Router) { }
  ngOnInit() {}
}


