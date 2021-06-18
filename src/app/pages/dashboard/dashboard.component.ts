import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/interfaces/assets.interface';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Instrument } from '../../interfaces/instrument.interface';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  
  assets: Asset[] = [];

  instruments: Instrument[] = [];

  loading: boolean = true;
  
  constructor(private dataService: DataServiceService) {  
    this.dataService.getAssets().subscribe((resp:any) => {
      resp.forEach((asset: any) => {

        this.assets.push({
          id: asset.id,
          asset_name: asset.asset_name,
          can_deposit: asset.can_deposit,
          can_withdrawal: asset.can_withdrawal,
          img: `https://trade.globalblock.co.uk/images/${asset.id}.svg`
        })
      });
      this.loading = false;
      this.assets.sort(function(a,b){return Number(a.can_deposit)-Number(b.can_deposit)});
      this.assets.reverse();
      console.log(this.assets);
    })
    
   }

  ngOnInit(): void {
  }

}
