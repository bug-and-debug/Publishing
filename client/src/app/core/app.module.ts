import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule, MdAutocompleteModule, MdSnackBarModule, MdChipsModule, MdCardModule, MdInputModule, MdIconModule, MdToolbarModule, MdSelectModule, MdButtonModule, MdMenuModule, MdOptionModule, MdSlideToggleModule, MdDialogModule, MdGridListModule } from '@angular/material';
import { RestangularModule } from 'ngx-restangular';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider,  FacebookLoginProvider } from 'angular4-social-login';
import 'hammerjs';
import { LoadingModule } from 'ngx-loading';
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from '../modules/layout/app.component';
import { HeaderComponent } from '../modules/layout/header.component';
import { ToolbarComponent } from '../modules/layout/toolbar.component';
import { GroupAutoCompleteSelector } from '../shared/components/groupAutoCompleteSelector.component';
import { LandingComponent } from '../modules/landing/landing.component';
import { ArticleFormDialog } from '../modules/articles/articleFormDialog.component';
import { ArticleAgreeDialog } from '../modules/articles/articleAgreeDialog.component';
import { ArticleGroupSelectorDialog } from "../modules/articles/articleGroupSelectorDialog.component";
import { ConfirmDialog } from "../shared/components/confirmDialog/confirmDialog.component"
import { ArticleViewComponent } from '../modules/articles/articleView.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { D3Service } from '../shared/services/D3Service';
import { LoadingSpinnerService } from '../shared/services/loadingSpinnerService';
import { SharedService } from '../shared/services/shared.service';
import { AppConfig } from "./app.config";
import { Ng2MultiStepFormRoutingModule } from './app-routing.module';
import { ClickOutsideDirective } from '../shared/directives/clickOutside.directive';

export function RestangularModuleConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(AppConfig.API_ENDPOINT);
};

export function provideSocialLoginConfig() {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(AppConfig.SOCIAL_LOGIN_CONFIG.GOOGLE)
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(AppConfig.SOCIAL_LOGIN_CONFIG.FACEBOOK.ID)
    },
    // {
    // id: LinkedinLoginProvider.PROVIDER_ID,
    // provider: new LinkedinLoginProvider('LINKEDIN_CLIENT_ID')
    // }
  ]);
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, ToolbarComponent, GroupAutoCompleteSelector,
    LandingComponent, ArticleAgreeDialog, ArticleFormDialog, ArticleGroupSelectorDialog,
    ConfirmDialog,
    ArticleViewComponent,
    ProfileComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdMenuModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    MdOptionModule,
    MdIconModule,
    MdChipsModule,
    MdSelectModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdDialogModule,
    MdCardModule,
    MdInputModule,
    MdSnackBarModule,
    MdGridListModule,
    Ng2MultiStepFormRoutingModule,
    RestangularModule.forRoot(RestangularModuleConfigFactory),
    HttpClientModule,
    SocialLoginModule,
    LoadingModule,
    TagInputModule
  ],
  providers: [
    D3Service,
    SharedService,
    LoadingSpinnerService,
    {
      provide: AuthServiceConfig,
      useFactory: provideSocialLoginConfig
    }
  ],
  entryComponents: [
      ArticleAgreeDialog, ArticleFormDialog, ArticleGroupSelectorDialog,
      ConfirmDialog],
  bootstrap: [AppComponent]

})

export class AppModule { }
