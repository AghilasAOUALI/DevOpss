import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credentials} from "../domain/credentials";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

const TOKEN_KEY = 'AuthorizationToken';

@Injectable()
export class LoginService implements OnInit{



  private isAuthenticatedSubject;
  public isAuthenticated;

  constructor(private _http : HttpClient) {
    if(this.getToken() != null){
      this.isAuthenticatedSubject = new BehaviorSubject<boolean>(true);
    }else
      this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  login(credentials : Credentials):Observable<any>{
      return this._http.post(`${environment.backend_url}/token/generate-token`,credentials);
  }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    this.isAuthenticatedSubject.next(false);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
    this.isAuthenticatedSubject.next(true);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  ngOnInit(): void {
  }
}
