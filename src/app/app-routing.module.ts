import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LoginComponent} from "./auth/login/login.component";
import {Errors404Component} from "./auth/errors404/errors404.component";
import {Errors500Component} from "./auth/errors500/errors500.component";

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"404", component: Errors404Component},
  {path:"500", component: Errors500Component},
  {path:"home", component: HomeComponent},
  {path:"user-detail", component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
