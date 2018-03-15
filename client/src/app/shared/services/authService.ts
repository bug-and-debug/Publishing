import { Injectable } from '@angular/core';
import { AuthService as SocialLoginService, FacebookLoginProvider,  GoogleLoginProvider } from 'angular4-social-login';
import { Restangular } from 'ngx-restangular';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService';
import { SharedService } from '../../shared/services/shared.service'

@Injectable()
export class AuthService {
	constructor(public _auth:SocialLoginService, private loadingSpinnerService: LoadingSpinnerService, private restangular: Restangular, private _shared: SharedService) {
	}

	login(provider) {
		switch(true) {
			case provider == 'GOOGLE': this._auth.signIn(GoogleLoginProvider.PROVIDER_ID); break;
			case provider == 'FACEBOOK': this._auth.signIn(FacebookLoginProvider.PROVIDER_ID); break;
			case provider == 'TWITTER': break;
		}
	}

	saveCurrentUser(user) {
		localStorage.setItem('currentUser', JSON.stringify(user));
	}

	getCurrentUser() {
		let currentUser = localStorage.getItem('currentUser');
		if(currentUser == null || currentUser == '') return null;
		return JSON.parse(currentUser);
	}

	public static isUserLoggedIn() {
		let currentUser = localStorage.getItem('currentUser');
		if(currentUser == null || currentUser == '') {
			return false
		}

		return true
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');

		this._auth.signOut();

		// call backend
		this.restangular.all('auth').customGET('logout');
	}

	disconnect(provider, callback) {
		//this._auth.signOut();
		if (this.getCurrentUser() != null) {
			this.loadingSpinnerService.show()
			this.restangular.one('auth', this.getCurrentUser()._id).customPOST({provider: provider}, 'removeSocialAccount').subscribe(updatedUser => {
				this.loadingSpinnerService.hide();
				this.saveCurrentUser(updatedUser)
				callback(updatedUser);
			});
		} else {

		}
	}

	me(callback) {
		this.restangular.all('auth').customGET('me').subscribe(user => {
			this.saveCurrentUser(user);
			callback(user);
		});
	}

	subscribe(callback) {
		this._auth.authState.subscribe((user) => {
			// try to login
			if(user != null) {
				this.loadingSpinnerService.show();
				// get user locations
					if(this.getCurrentUser() == null) {
						this._shared.getLocation().then(locData => {
							var location = {}
							location['country'] = locData['country']
							location['state'] = locData['regionName']
							location['city'] = locData['city']
							user['location'] = location

							this.restangular.all('auth').customPOST(user, 'login').subscribe(savedUser => {
								this.loadingSpinnerService.hide();
								this.saveCurrentUser(savedUser);
								callback(savedUser);
							});
						}).catch(err => {
							console.log(err)
						})
					} else {
						this.restangular.one('auth', this.getCurrentUser()._id).customPOST(user, 'addSocialAccount').subscribe(updatedUser => {
							this.loadingSpinnerService.hide();
							this.saveCurrentUser(updatedUser)
							callback(updatedUser);
						});
					}
			}
		});
	}
}
