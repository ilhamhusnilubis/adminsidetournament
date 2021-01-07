import { Component, OnInit } from '@angular/core';
declare const tableTurnamen: any;
@Component({
  selector: 'app-tableturnamen',
  templateUrl: './tableturnamen.component.html',
  styleUrls: ['./tableturnamen.component.scss']
})
export class TableturnamenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    tableTurnamen();
  }

}
