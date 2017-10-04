import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {ProjectListComponent} from './projects/project-list/project-list.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'geo', component: GeolocationComponent}, 
  { path: 'admin', component: AdminComponent }
//  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
