import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { RoleComponent } from './role.component';
const router: Routes = [
  { path: '', component: RoleComponent },
  { path: 'add', component: AddroleComponent },
];
@NgModule({  
  imports: [CommonModule, RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}
