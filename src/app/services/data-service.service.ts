import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from '../interfaces/assets.interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  today: string;
  tenDaysAgo;
  todayDate: Date;
  tenDaysAgoFinal: string;
  instruments:any = [];
  public activeInstruments: string[] = [];
  public activeAsset: Asset = {} as Asset;
  
  constructor(private http: HttpClient) { 

    this.today = new Date().toISOString().slice(0, 10)
    this.todayDate = new Date();
    this.tenDaysAgo = Number(this.todayDate) - 1000 * 60 * 60 * 24 * 10; 
    this.tenDaysAgoFinal = new Date(this.tenDaysAgo).toISOString().slice(0, 10);
    this.getInstruments();

    
   }

  assets: Asset[] = [];
  

  
  

  getAssets(){
    return this.http.get('https://trade.globalblock.co.uk/marketdata/api/v2/marketdata/assets')
  }

  getAssetRate(asset:string){
    return this.http.get(`https://trade.globalblock.co.uk/marketdata/api/v2/rates/${asset}/usdt`)
  }

  getInstruments(){
    this.http.get('https://trade.globalblock.co.uk/marketdata/instruments').subscribe((resp:any) => {
      this.instruments = resp;
    })
  }
  getInstrumentData(instrument: string){
    return this.http.get(`https://trade.globalblock.co.uk/marketdata/instruments/${instrument}/history?startDate=${this.tenDaysAgoFinal}&endDate=${this.today}&type=1d`)
  }

}
// this.assets.push({
//   id: asset.id, 
//   asset_name: asset.asset_name})