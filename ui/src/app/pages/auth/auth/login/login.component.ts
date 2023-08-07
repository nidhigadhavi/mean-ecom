// Angular modules
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

// Internal modules
import { environment } from "@env/environment";

// Services
import { AppService } from "@services/app.service";
import { StoreService } from "@services/store.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	public appName: string = environment.appName;

	public formGroup!: FormGroup<{
		email: FormControl<string>;
		password: FormControl<string>;
	}>;

	title = "loginGoogle";

	auth2: any;

	@ViewChild("loginRef", { static: true }) loginElement!: ElementRef;
  googleAuthSDK: any;

	constructor(
		private router: Router,
		private storeService: StoreService,
		private appService: AppService
	) {
		this.initFormGroup();
	}
	ngOnInit() {
		this.googleAuthSDK();
	}

	// -------------------------------------------------------------------------------
	// NOTE Init ---------------------------------------------------------------------
	// -------------------------------------------------------------------------------

	private initFormGroup(): void {
		this.formGroup = new FormGroup({
			email: new FormControl<string>(
				{
					value: "",
					disabled: false,
				},
				{
					validators: [Validators.required, Validators.email],
					nonNullable: true,
				}
			),
			password: new FormControl<string>(
				{
					value: "",
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
		console.log("1!!");
		await this.authenticate();
	}

	// -------------------------------------------------------------------------------
	// NOTE Requests -----------------------------------------------------------------
	// -------------------------------------------------------------------------------

	private async authenticate(): Promise<void> {
		this.storeService.setIsLoading(true);
		console.log("2");
		const email = this.formGroup.controls.email.getRawValue();
		const password = this.formGroup.controls.password.getRawValue();
		const success = await this.appService.authenticate(email, password);

		this.storeService.setIsLoading(false);

		if (!success) return;

		// NOTE Redirect to home
		this.router.navigate(["/organisation"]);
	}

	// -------------------------------------------------------------------------------
	// NOTE Helpers ------------------------------------------------------------------
	// -------------------------------------------------------------------------------
}
