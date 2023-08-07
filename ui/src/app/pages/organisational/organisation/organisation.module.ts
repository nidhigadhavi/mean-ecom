import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationComponent } from './organisation.component';
import { OrganisationRoutingModule } from './organisation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveComponent } from './leave/leave.component';

@NgModule({
  declarations: [
    OrganisationComponent,
    RoleComponent,
    EmployeeComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    SharedModule
  ]
})
export class OrganisationModule { }
