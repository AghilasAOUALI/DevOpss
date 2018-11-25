import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {MatCardModule} from "@angular/material";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'user', component:  UserComponent, canActivate : [AuthGuard]},
  { path: 'signup', component:  SignupComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    MatCardModule
  ],
  declarations: []
})
export class AppRoutingModule { }
