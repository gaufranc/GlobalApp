import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-linear-graph',
  templateUrl: './linear-graph.component.html',
  styleUrls: ['./linear-graph.component.css']
})
export class LinearGraphComponent implements OnInit {
  @Input() title: string = '';
  @Input('labels') linearChartLabels: Label[] = ['seccion1', 'seccion2', 'seccion3']
  @Input('data') linearChartData: MultiDataSet = [[100, 120, 140]]


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
