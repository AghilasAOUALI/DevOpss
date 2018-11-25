import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) {
    console.log('appel service : SignupService')

  }

  signUp(user:User):Observable<User>{
    return this._http.post(`${environment.backend_url}/token/signup`, user);
  }
}
