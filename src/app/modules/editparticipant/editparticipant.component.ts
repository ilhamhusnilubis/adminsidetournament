import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-editparticipant',
  templateUrl: './editparticipant.component.html',
  styleUrls: ['./editparticipant.component.scss']
})
export class EditparticipantComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    myTest();
  }

}
