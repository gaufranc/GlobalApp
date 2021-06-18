import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {
  
  transform(img:any){
    
    if(img){
      console.log(img);
      return img
    } else {
      return 'https://trade.globalblock.co.uk/images/generic.svg'
    }
    
  }

}
