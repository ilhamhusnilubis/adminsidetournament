import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
// import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Chart = [];
  Card = [];
  Pie = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.Chart = this.dashboardService.Chart();
    this.Card = this.dashboardService.Card();
    this.Pie = this.dashboardService.Pie();
    // this.dataSource.paginator = this.paginator;
  }

}
