import { Component } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {LoginService} from '../login/login.service';
import {MyCleaningEventModel} from '../myCleaningEventModel';

@Component({
  selector: 'app-my-cleaning-events',
  templateUrl: './my-cleaning-events.page.html',
  styleUrls: ['./my-cleaning-events.page.scss'],
})
export class MyCleaningEventsPage {

  myCleaningEvents: MyCleaningEventModel[];

  constructor(private restApiService: RestApiService, private loginService: LoginService) { }

  ionViewWillEnter(): void {
      this.loginService.getUserAlreadyLogged().subscribe(loggedUserData => {
          this.loadConversationsForUser(loggedUserData.getId());
      });
  }

    loadConversationsForUser(userId):void {
        this.restApiService.getCleaningEventsForUser(userId).subscribe(myCleaningEvents => {
            this.myCleaningEvents = myCleaningEvents;
        });
    }
}
