import {Component, OnInit} from '@angular/core';
import {User} from "../domain/user";
import {SignupService} from "./signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();

  constructor(private _signUpService : SignupService, private _router : Router) { }
  ngOnInit() {
  }

  signUp(){
    this._signUpService.signUp(this.user).subscribe(user =>{
      console.log(user);
      alert('Votre compte vient d\'être crée');
      this._router.navigate([''])
    },
      error =>{
       alert('Création impossible, veuillez réessayer')
      })

  }
}
