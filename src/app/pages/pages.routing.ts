import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { PdftohtmlComponent } from './pdftohtml/pdftohtml.component';


const routes: Routes = [
    { path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        { path: 'pdftohtml', component: PdftohtmlComponent, data: {titulo: 'PDF to HTML'}},
        { path: 'asset/:id', component: AssetViewComponent, data: {titulo: 'Asset View'}},
    ]
    }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PagesRoutingModule {}
