import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Credentials} from "../domain/credentials";
import {AppComponent} from "../app.component";
import {User} from "../domain/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credential = new Credentials();


  ngOnInit() {
  }

  constructor(private router: Router, private _loginService: LoginService,
              @Inject(forwardRef(() => AppComponent)) public app: AppComponent) {
  }

  login(): void {
    this._loginService.login(this.credential).subscribe(data => {
        this._loginService.saveToken(data.token);
        this.router.navigate(['user']);
      },
      er => {
        alert("Invalid credentials");
      });
  }
}
