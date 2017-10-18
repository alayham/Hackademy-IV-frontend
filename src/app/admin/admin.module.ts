import { MatTableModule, MatSortModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// Services
import { DataService } from './services/data.service';

// Components
import { AdminComponent } from './admin.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationPageComponent } from './organization-page/organization-page.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReportsModule } from './reports/reports.module';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    ReportsModule
  ],
  exports: [
  ],
  declarations: [
    AdminComponent,
    OrganizationListComponent,
    ProjectListComponent,
    AdminToolbarComponent,
    OrganizationFormComponent,
    OrganizationPageComponent,
    ProjectPageComponent,
    ProjectFormComponent,
    SidebarComponent,
    DashboardComponent,
    TableComponent,
  ],
  providers: [DataService]
})

export class AdminModule { }
