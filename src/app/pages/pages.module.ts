import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ChartsModule } from 'ng2-charts';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { PdftohtmlComponent } from './pdftohtml/pdftohtml.component';

import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    DashboardComponent,
    AssetViewComponent,
    PagesComponent,
    PdftohtmlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatProgressSpinnerModule,
    ChartsModule,
    MatButtonModule,
    PipesModule,
    MatSnackBarModule,
    ComponentsModule,
    MatStepperModule
    
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    AssetViewComponent,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule
  ]
})
export class PagesModule { }
