import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  Chart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
  }];
  }

  Card(){
    return [500, 300, 250, 110]
  }

  Pie(){
    return [{
      name: 'Spain',
      y: 505370,
      z: 92.9
  }, {
      name: 'France',
      y: 551500,
      z: 118.7
  }, {
      name: 'Poland',
      y: 312685,
      z: 124.6
  }, {
      name: 'Czech Republic',
      y: 78867,
      z: 137.5
  }, {
      name: 'Italy',
      y: 301340,
      z: 201.8
  }, {
      name: 'Switzerland',
      y: 41277,
      z: 214.5
  }, {
      name: 'Germany',
      y: 357022,
      z: 235.6
  }];
  }
}
  
