// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () =>
      import('./organisation/organisation.module').then((m) => m.OrganisationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationalRoutingModule {}
