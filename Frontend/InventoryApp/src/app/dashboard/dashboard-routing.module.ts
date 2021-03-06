import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from '../infrastructure/guards/auth-guard.service';
// Components
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './common/profile/profile.component';
import { StoragesComponent } from './common/storages/storages.component';
import { ProductsComponent } from './common/products/products.component';
import { StorageDetailsComponent } from './common/storages/storage-details/storage-details.component';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'storages', component: StoragesComponent },
        { path: 'storages/:id/details', component: StorageDetailsComponent },
        { path: 'products', component: ProductsComponent }
      ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
