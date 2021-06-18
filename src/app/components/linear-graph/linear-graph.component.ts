import { Component, Input, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-linear-graph',
  templateUrl: './linear-graph.component.html',
  styleUrls: ['./linear-graph.component.css']
})
export class LinearGraphComponent implements OnInit {
  @Input() title: string = '';
  @Input('labels') linearChartLabels: Label[] = ['seccion1', 'seccion2', 'seccion3']
  @Input('data') linearChartData: MultiDataSet = [[100, 120, 140]]


  public colors:Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
