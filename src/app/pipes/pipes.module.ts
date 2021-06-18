import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImgPipe } from './no-img.pipe';



@NgModule({
  declarations: [NoImgPipe],
  imports: [
    CommonModule
  ],
  exports: [
    NoImgPipe
  ]
})
export class PipesModule { }
