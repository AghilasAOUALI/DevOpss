import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {CustomMaterialModule} from "./CustomMaterialModule";
import {UserComponent} from './user/user.component';
import {AppRoutingModule} from "./AppRoutingModule";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material";
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./login/login.service";
import {SignupService} from "./signup/signup.service";
import {HeaderComponent} from './shared/layout/header/header.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {SharedModule} from "./shared/shared.module";
import {Interceptor} from "./app.interceptor";
import {AuthGuard} from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [LoginService, SignupService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
