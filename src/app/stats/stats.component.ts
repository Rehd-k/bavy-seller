import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor() { }

  orders = [{
    date: 2309099,
    price : 450
  },
  {
    date: 79473923,

  }];
  public lineChat = 'line';
  public chartDatasets: Array<any> = [
    { data: [5, 9, 0, 1, 6, 5] }
  ];
  public chartLabels: Array<any> = this.MONTHS();

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  MONTHS() {
    const months = [];
    const dateStart = moment([2021, 1, 1]);
    const dateEnd = moment().endOf('year');
    while (dateEnd.diff(dateStart, 'month') >= 0) {
      months.push(dateStart.format('MMM'));
      dateStart.add(1, 'month');
    }
    return months;
  }


  ngOnInit(): void {
    console.log(this.MONTHS());
  }
}
