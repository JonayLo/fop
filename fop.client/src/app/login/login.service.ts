import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {LoggedUserModel} from '../loggedUserModel';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static USER_LOOGED_KEY = 'USER_LOGGED_KEY';

  private apiUrl = 'https://ok1idm43pk.execute-api.us-east-1.amazonaws.com/dev/';
  private loggedUser: LoggedUserModel;

  constructor(private nativeStorage: NativeStorage, private http: HttpClient) {}

  isUserAlreadyLogged(): Observable<boolean> {
    return from(this.nativeStorage.getItem(LoginService.USER_LOOGED_KEY).then((userInfo: any) => !!userInfo).catch(() => false));
  }

  login(email: string, password: string): Observable<LoggedUserModel> {
    return this.http.post<LoggedUserModel>(this.apiUrl + 'login', {email, password}).pipe(
        map(userLogged => {
            this.saveUserLoggedLocally(userLogged);
            this.loggedUser = userLogged;
            return userLogged;
        })
    ) as Observable<LoggedUserModel>;
  }

  logout(): any {
    this.nativeStorage.clear();
  }

  getUserAlreadyLogged(): Observable<LoggedUserModel> {
    return from(this.nativeStorage.getItem(LoginService.USER_LOOGED_KEY).then(userLogged => userLogged));
  }

  private saveUserLoggedLocally(userLogged: LoggedUserModel): any {
    return this.nativeStorage.setItem(LoginService.USER_LOOGED_KEY, userLogged);
  }

  getLoggedUser(): LoggedUserModel {
    return this.loggedUser;
  }
}
