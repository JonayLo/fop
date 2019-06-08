import { Component } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {BeachModel} from '../beachModel';
import {OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  closestBeaches: Array<BeachModel>;

  constructor(private restApì: RestApiService, private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.loginService.getUserAlreadyLogged().subscribe(loggedUserData => {
        this.initializeClosestBeaches(loggedUserData.id);
    });
  }

  initializeClosestBeaches(userId: string): void {
    this.restApì.getClosestBeaches(userId).subscribe((closestBeaches: Array<BeachModel>) => {
      this.closestBeaches = closestBeaches;
    });
  }

}
