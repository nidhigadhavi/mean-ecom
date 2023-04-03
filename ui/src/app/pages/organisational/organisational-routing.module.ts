// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Components
import { NotFoundComponent } from '../../static/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'organisation',
    loadChildren: () =>
      import('./organisation/organisation.module').then((m) => m.OrganisationModule),
  },
  {
    path:'home', component:HomeComponent
  },
 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OrganisationalRoutingModule {}
