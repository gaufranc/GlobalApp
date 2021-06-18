import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/interfaces/instrument.interface';
import { DataServiceService } from '../../services/data-service.service';
import { Asset } from '../../interfaces/assets.interface';


import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

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
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];




  loading: boolean = true;
  instruments: Instrument[] = [];
  asset: Asset = {} as Asset;

  constructor(public dataService: DataServiceService) { 
    this.asset = this.dataService.activeAsset;
    this.dataService.activeInstruments.forEach(instrument => {
      this.dataService.getInstrumentData(instrument).subscribe((resp) => {
        console.log(resp);
        this.loading = false;
      })
    });
   }

  ngOnInit(): void {
  }

}
