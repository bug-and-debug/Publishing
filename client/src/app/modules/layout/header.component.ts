import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { AuthService } from '../../shared/services/authService';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../../shared/services/shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent {
  title = 'Placeholder for now';
  pageTitle = '';
  currentUser: any = null;
  bShowLoginPopup: boolean = false;
  authSubscription: any = null;

  constructor(private authService: AuthService,
              private _sharedService: SharedService,
              private router: Router) {
    this._sharedService.action$.subscribe(
      data => {
        if(data['action'] == 'login')
          this.showLogin(true)
        else if(data['action'] == 'bookmarks')
          this.pageTitle = 'Bookmarks'
      });
  }

  ngOnInit() {
  	this.currentUser = AuthService.getCurrentUser();

    this.authSubscription = this.authService.subscribe((res) => {
      this.currentUser = AuthService.getCurrentUser();
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  showLogin(bShow: boolean) {
    if(this.currentUser == null) {
      this.bShowLoginPopup = bShow;
    }
  }

  login(provider) {
    this.authService.login(provider);
    this.showLogin(false);
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
  }

  myProfile() {
    console.log('my profile')
    this.router.navigate(['/profile']);
  }

  myPosts() {
      this.router.navigate(['/']);
      this._sharedService.emitAction({ action: 'userposts', data: AuthService.getCurrentUser()._id });
      this.pageTitle = 'My Posts'
  }
}
