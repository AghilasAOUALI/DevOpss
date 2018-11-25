import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _loginService : LoginService, private _router : Router) { }

  ngOnInit() {
  }

  logOut(){
    this._loginService.signOut();
    this._router.navigate(['/'])
  }
}
