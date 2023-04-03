import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoleRoutingModule, SharedModule],
})
export class RoleModule {
    constructor(){
        console.log("role module initialise!!");
        
    }
}
