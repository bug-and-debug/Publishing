import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Location } from '@angular/common'
import { MdSnackBar, MdDialog } from '@angular/material';
import { Restangular } from 'ngx-restangular';
import { D3Service } from '../../shared/services/D3Service';
import { DataService } from '../../shared/services/dataService';
import { AuthService } from '../../shared/services/authService';
import { ArticleService } from '../../shared/services/articleService';
import { LoadingSpinnerService } from '../../shared/services/loadingSpinnerService'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService]
})

export class ProfileComponent {

  ageTable = [
    {value: '10', title: '18-24'},
    {value: '20', title: '25-34'},
    {value: '30', title: '35-44'},
    {value: '40', title: '45-54'},
    {value: '50', title: '55-64'},
    {value: '60', title: '65 or more'},
    {value: '0', title: 'Unknown'},
  ]

  query: any = {
    search: '',
    views: '',
    periodStart: null,
    periodEnd: null,
    g11: null,
    g12: null,
    g13: null,
    stateView: false
  };

  socialConnects = {
    GOOGLE: { email: '', status: 'disconnected'},
    FACEBOOK: { email: '', status: 'disconnected'},
    TWITTER: { email: '', status: 'disconnected'},
  };

  userId: string;
  email: any;
  alias: any;
  gender: string;
  age: string;
  address = {country: '', state: '', city: ''};

  authSubscription: any = null;
  pageId: any;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private restangular: Restangular,
              private dialog: MdDialog,
              private location: Location,
              private loadingSpinnerService: LoadingSpinnerService,
              private mdSnackBar: MdSnackBar,
              private authService: AuthService){

  }

  getProfileData() {
    let profileData = this.authService.getCurrentUser();

    this.userId = profileData._id
    profileData['socialConnects'].forEach(platform => {
      this.socialConnects[platform['provider']]['email'] = platform['email']
      this.socialConnects[platform['provider']]['status'] = 'connected'
    })

    this.email = new FormControl(profileData.email, [Validators.required, Validators.email]);
    this.alias = new FormControl(profileData.alias, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.gender = profileData.gender == null ? 'male' : profileData.gender
    if(profileData.age == 0 || profileData.age < 18) {
      this.age = "0"
    } else {
      if (parseInt(profileData.age) % 10 >= 5)
        this.age = (parseInt(profileData.age) / 10 * 10).toString()
      else
        this.age = ((parseInt(profileData.age) / 10 - 1) * 10).toString()
    }

    this.address = {country: profileData.location['country'],
                    state: profileData.location['state'],
                    city: profileData.location['city']}
  }

  ngOnInit() {
    this.getProfileData()
    this.pageId = 'PAGE_PROFILE'
    // this.authSubscription = this.authService.subscribe((res) => {
    //   this.getProfileData()
    // });
  }

  ngOnDestroy() {
    //this.authSubscription.unsubscribe();
  }

  onFilterChanged() {
    this.router.navigate(['/'], { queryParams: _.pickBy(this.query, (q) => q && q != '') });
  }

  saveProfile() {
    if (this.email.invalid) {
      this.mdSnackBar.open('Please enter valid email', null, { duration: 6000 });
      return;
    }

    if (this.alias.invalid) {
      this.mdSnackBar.open('Please enter valid alias', null, { duration: 6000 });
      return;
    }

    let profileData = {
      email: this.email.value,
      alias: this.alias.value,
      gender: this.gender,
      age: parseInt(this.age)
    }

    this.loadingSpinnerService.show();
    this.restangular.one('user', this.userId).customPUT(profileData).subscribe(res => {
      this.loadingSpinnerService.hide();
      this.mdSnackBar.open('You updated profile successfully', null, { duration: 6000 });
    }, () => {
      this.loadingSpinnerService.hide();
    });
  }

  connectSocialAccount(provider) {
    console.log('connect social account ' +  provider)
    //this.authService.login(provider)
  }

  disconnectSocialAccount(provider) {
    console.log('disconnect social account ' +  provider)
    // this.authService.disconnect(provider, res => {
    //   console.log('social account disconnected ......')
    //   this.getProfileData();
    // })
  }

  showBookmarks() {
    console.log('profile page show bookmarks')
  }

  emailValidator() {
    return this.email.hasError('required') ? 'You must enter an email' :
        this.email.hasError('email') ? 'Invalid email' :
            '';
  }

  aliasValidator() {
    let error = ''
    if (this.alias.hasError('required'))
      error = 'You must enter an alias'
    else if (this.alias.hasError('minlength'))
      error = 'Alias has to be more than 6 characters'
    else if(this.alias.hasError('maxlength'))
      error = 'Alias has to be less than 20 characters'

    return error
  }

}
