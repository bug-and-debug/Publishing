import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../modules/landing/landing.component';
import { ArticleViewComponent } from '../modules/articles/articleView.component';
import { ProfileComponent } from '../modules/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'article/:slug', component: ArticleViewComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2MultiStepFormRoutingModule { }
