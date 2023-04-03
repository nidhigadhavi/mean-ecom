// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from 'src/app/static/not-found/not-found.component';

// Internal modules
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { OrganisationalRoutingModule } from './organisational-routing.module';

// Components

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [CommonModule, OrganisationalRoutingModule, SharedModule],
})
export class OrganisationalModule {
  constructor() {
    console.log('oganisational module!!');
  }
}
