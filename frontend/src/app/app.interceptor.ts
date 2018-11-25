import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from "./login/login.service";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";


@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private loginStorage: LoginService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginStorage.getToken()}`
      }
    });

    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Success')
        }
      }, error => {
        console.log('Error')
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            this.router.navigate(['/']);
          }
        }

      })
    )
  }

}
