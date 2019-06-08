import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAlreadyLoggedGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return new Observable((observer) => {
        this.loginService.isUserAlreadyLogged().subscribe(isUserAlreadyLogged => {
            let value = true;
            if (isUserAlreadyLogged) {
                this.router.navigate(['tabs']);
                value = false;
            }
            observer.next(value);
            observer.complete();
        });
    });
  }
}
