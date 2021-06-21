import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/interfaces/assets.interface';
import { DataServiceService } from 'src/app/services/data-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  
  assets: Asset[] = [];

  loading: boolean = true;
  
  constructor(private dataService: DataServiceService, private snackBar: MatSnackBar, private router: Router) {  
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
    })
    
   }

  ngOnInit(): void {
  }
  inDepth(asset: Asset){
    console.log(asset);
    this.dataService.activeInstruments = [];
    this.dataService.activeAsset = {} as Asset;
    this.dataService.instruments.forEach((instrument:any) => {
      if(instrument.includes(asset.id)){
        this.dataService.activeInstruments.push(instrument)
        this.dataService.activeAsset = asset;
        this.router.navigateByUrl(`/dashboard/asset/${asset.id}`)
      }
    });
    if(this.dataService.activeInstruments.length === 0){
      this.snackBar.open(`We're sorry! This asset is not working at the moment`, 'Dismiss')
    }
  }
}
