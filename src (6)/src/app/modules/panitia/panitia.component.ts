import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'app-panitia',
  templateUrl: './panitia.component.html',
  styleUrls: ['./panitia.component.scss']
})
export class PanitiaComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    myTest();
  
  }

}
