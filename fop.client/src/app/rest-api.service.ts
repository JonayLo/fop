import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeachModel} from './beachModel';
import {map} from 'rxjs/internal/operators';
import {ConversationModel} from './conversationModel';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiUrl = 'https://ok1idm43pk.execute-api.us-east-1.amazonaws.com/dev/';

  constructor(private http: HttpClient) { }

  getClosestBeaches(): Observable<Array<BeachModel>> {
    return this.http.get<BeachModel[]>(this.apiUrl + 'nearestBeaches').pipe(map(beachList => {
      return BeachModel.buildFromResponse(beachList);
    }));
  }

  getConversationsForUser(userId): Observable<Array<ConversationModel>> {
      return this.http.get<BeachModel[]>(this.apiUrl + 'users/' + userId + '/conversations').pipe(map(conversationList => {
          return ConversationModel.buildFromResponse(conversationList);
      }));
  }

}
