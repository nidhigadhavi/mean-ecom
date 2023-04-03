// Angular modules
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Internal modules
import { environment } from '@env/environment';

// Services
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public appName: string = environment.appName;
  public formGroup!: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
    name: FormControl<string>;
  }>;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private appService: AppService
  ) {
    this.initFormGroup();
  }

  // -------------------------------------------------------------------------------
  // NOTE Init ---------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      email: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }
      ),
      password: new FormControl<string>(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }

  // -------------------------------------------------------------------------------
  // NOTE Actions ------------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickSubmit(): Promise<void> {
    await this.authenticate();
  }

  // -------------------------------------------------------------------------------
  // NOTE Requests -----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private async authenticate(): Promise<void> {
    this.storeService.setIsLoading(true);
    const name = this.formGroup.controls.name.getRawValue();
    const email = this.formGroup.controls.email.getRawValue();
    const password = this.formGroup.controls.password.getRawValue();
    const success = await this.appService.authenticate(email, password);

    this.storeService.setIsLoading(false);

    if (!success) return;

    // NOTE Redirect to home
    this.router.navigate(['/home']);
  }

  // -------------------------------------------------------------------------------
  // NOTE Helpers ------------------------------------------------------------------
  // -------------------------------------------------------------------------------
}
