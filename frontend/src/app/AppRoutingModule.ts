import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {MatCardModule} from "@angular/material";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component:  UserComponent},
  {path : '', component : AppComponent}
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
