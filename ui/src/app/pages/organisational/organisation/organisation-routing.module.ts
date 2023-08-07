import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { OrganisationComponent } from './organisation.component';
import { RoleModule } from './role/role.module';
import { EmployeeComponent } from './employee/employee.component';

const router: Routes = [
  { path: '', component: OrganisationComponent },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class OrganisationRoutingModule {}
