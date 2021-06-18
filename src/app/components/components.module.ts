import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LinearGraphComponent } from './linear-graph/linear-graph.component';



@NgModule({
  declarations: [LinearGraphComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    LinearGraphComponent
  ]
})
export class ComponentsModule { }
