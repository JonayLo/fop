import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BeachCleaningEventModel} from '../beachCleaningEventModel';
import {RestApiService} from '../rest-api.service';
import * as moment from 'moment';
import {LoginService} from '../login/login.service';
import {LoggedUserModel} from '../loggedUserModel';
import {BeachModel} from '../beachModel';

@Component({
  selector: 'app-selected-beach',
  templateUrl: './selected-beach.page.html',
  styleUrls: ['./selected-beach.page.scss'],
})
export class SelectedBeachPage implements OnInit {

  private beachCleanEvents: BeachCleaningEventModel[];
  private selectedBeach: BeachModel;
  private userLogged: LoggedUserModel;

  private selectedBeachImage = 'assets/las_canteras.png';

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute, private loginService: LoginService) { }


  ngOnInit() {
      this.loginService.getUserAlreadyLogged().subscribe(userLogged => {
          this.userLogged = userLogged;
          this.activatedRoute.params.subscribe(params => {
              this.restApiService.getCleaningBeachEvents(params.beachId).subscribe(beachCleanEvents => {
                  this.beachCleanEvents = beachCleanEvents;
              });
              this.restApiService.getClosestBeaches(userLogged.id).subscribe(nearestBeaches => {
                  this.selectedBeach = nearestBeaches.find(nearestBeach => nearestBeach.getId() === params.beachId);
              });
          });
      });
  }

  getFinishDate(startingDate: Date, durationInHours: number): Date {
    return moment(startingDate).add(durationInHours, 'h').toDate();
  }

  onCleanEventAssign(beachCleanEvent: BeachCleaningEventModel): void {
    this.restApiService.assignBeachCleanEvent(beachCleanEvent, this.userLogged);
  }

}