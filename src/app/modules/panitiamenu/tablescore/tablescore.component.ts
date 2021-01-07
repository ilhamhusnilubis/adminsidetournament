import { Component, OnInit } from '@angular/core';
declare const addRemove: any;

@Component({
  selector: 'app-tablescore',
  templateUrl: './tablescore.component.html',
  styleUrls: ['./tablescore.component.scss']
})
export class TablescoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    addRemove();
  }

}
