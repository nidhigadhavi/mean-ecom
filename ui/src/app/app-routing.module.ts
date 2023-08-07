// Angular modules
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/auth/auth/login/login.component";

// Components
import { NotFoundComponent } from "./static/not-found/not-found.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/auth",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./pages/auth/auth.module").then((m) => m.AuthModule),
	},
	{
		path: "organisation",
		loadChildren: () => {
			return import("./pages/organisational/organisational.module").then(
				(m) => m.OrganisationalModule
			);
		},
	},

	{ path: "**", component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
