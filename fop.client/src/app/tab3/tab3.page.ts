import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {ConversationModel} from '../conversationModel';
import {RestApiService} from '../rest-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements  OnInit{

  conversations: ConversationModel[];

  constructor(private loginService: LoginService, private restApiService: RestApiService) {}

  ngOnInit(): void {
    const loggedUserData = this.loginService.getLoggedUser();
    this.loadConversationsForUser(loggedUserData.id);
  }

    loadConversationsForUser(userId):void {
      this.restApiService.getConversationsForUser(userId).subscribe(conversations => {
          this.conversations = conversations;
      });
  }

}
