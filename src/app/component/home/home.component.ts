import { Component }               from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { AuthService } from "../../service/auth.service";

@Component({
	selector:    "app-home",
	templateUrl: "./home.component.html"
})
export class HomeComponent {
	// private passwordPattern: RegExp = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)).{8}$/gm;
	public email = new FormControl("", [
		Validators.required, Validators.email
	]);
	public password = new FormControl("", [
		Validators.required, Validators.minLength(8), Validators.maxLength(8)
	]);

	constructor(public authService: AuthService) {
	}

	public validateEmail() {
		if (this.email.hasError("required"))
			return "Campo obrigatório";
		else if (this.email.hasError("email"))
			return "E-mail inválido";
		return "";
	}

	public validatePassword() {
		if (this.password.hasError("required"))
			return "Campo obrigatório";
		else if (this.password.invalid)
			return "Password inválido";
		return "";
	}

	public submit(email: boolean, login: boolean) {
		if (login) {
			if (email) {
				if (this.email.valid && this.password.valid)
					this.authService.emailLogin(this.email.value, this.password.value);
			}
			else
				this.authService.googleLogin();
		}
		else {
			this.email.reset("");
			this.password.reset("");
			this.authService.logout();
		}
	}
}
