import { Component } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
})
export class OrganisationComponent {
  public isLoading : boolean = true;

  constructor() {
    console.log('componne initialise!!!');
  }

  public ngOnInit() : void
  {
    setTimeout(_ =>
    {
      this.isLoading = false;
    }, 2000);
  }
}
