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
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  loading: boolean = true;
  instruments: Instrument[] = [];
  asset: Asset = {} as Asset;
  activeInstrumentsWithData: any[] = [];
  howMany: number = 0;



  finalData: any[] = [];
  finalLabel: any[] = [];
  constructor(public dataService: DataServiceService) { 
    this.asset = this.dataService.activeAsset;
    this.dataService.activeInstruments.forEach(instrument => {
      this.dataService.getInstrumentData(instrument).subscribe((resp:any) => {
        if(resp.data.length > 0){
          this.activeInstrumentsWithData.push(resp)
          
          
          this.finalData.push({
            data:[resp.data[0].open,resp.data[1].open,resp.data[2].open,resp.data[3].open,resp.data[4].open,resp.data[5].open,resp.data[6].open,resp.data[7].open,resp.data[8].open,resp.data[9].open, resp.data[10].open], label: resp.data[0].instrument
          })
          this.finalLabel.push(resp.data[0].start)
          // [{data:[number], label:''}]
          for (let index = 0; index < 11; index++) {
              this.finalLabel.push(resp.data[index].start)

          }
        }
        
        //console.log(this.activeInstrumentsWithData);
        //console.log(this.finalData);
        this.lineChartData = this.finalData;
        
        this.loading = false;
      })
      
    });
   }

  ngOnInit(): void {
  }

}


// constructor(public dataService: DataServiceService) { 
//   this.asset = this.dataService.activeAsset;
//   this.dataService.activeInstruments.forEach(instrument => {
//     this.dataService.getInstrumentData(instrument).subscribe((resp:any) => {
//       if(resp.data.length > 0){
//         this.activeInstrumentsWithData.push(resp)
//         this.howMany++
//         //console.log(resp.data);
//         this.finalData.push({
//           data:[resp.data[0].open,resp.data[1].open,resp.data[2].open,resp.data[3].open,resp.data[4].open,resp.data[5].open,resp.data[6].open,resp.data[7].open,resp.data[8].open,resp.data[9].open, resp.data[10].open], label: resp.data[0].instrument
//         })
//         //console.log(asd);
//         // [{data:[number], label:''}]
//       }
//       //console.log(this.activeInstrumentsWithData);
//       console.log(this.finalData);
//       this.lineChartData = this.finalData;
//       this.loading = false;
//     })
//   });
//  }