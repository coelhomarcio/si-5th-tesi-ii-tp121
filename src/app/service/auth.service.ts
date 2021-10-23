import { Injectable }      from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

import { Observable } from "rxjs";

import firebase from "firebase/compat/app";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private readonly _user: Observable<firebase.User | null>;
	private _authError!: string | null;

	constructor(private _firebaseAuth: AngularFireAuth) {
		this._user = _firebaseAuth.authState;
	}

	public get user(): Observable<firebase.User | null> {
		return this._user;
	}

	public get authError(): string | null {
		return this._authError;
	}

	public emailLogin(email: string, password: string) {
		this._authError = null;
		this._firebaseAuth.signInWithEmailAndPassword(email, password).then()
			.catch(err => {
				if (err.message.includes("no user record"))
					this._authError = "Usuário não existe!";
				else if (err.message.includes("password is invalid"))
					this._authError = "Password incorreto!";
				else if (err.message.includes("has been disabled"))
					this._authError = "Conta desativada!";
				else
					this._authError = err.message;
			});
	}

	public googleLogin() {
		this._authError = null;
		this._firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then()
			.catch(err => {
				if (err.message.includes("no user record"))
					this._authError = "Usuário não existe!";
				else if (err.message.includes("password is invalid"))
					this._authError = "Password incorreto!";
				else if (err.message.includes("has been disabled"))
					this._authError = "Conta desativada!";
				else
					this._authError = err.message;
			});
	}

	public logout() {
		this._firebaseAuth.signOut().then();
	}
}
