import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ViewChild } from '@angular/core';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  dataUser: any;
  constructor(private tokenService: TokenService) {}
  someMethod() {
    this.trigger.openMenu();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.dataUser = this.tokenService.getPayloadData;
  }
}
