import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeachModel} from './beachModel';
import {map} from 'rxjs/internal/operators';
import {ConversationModel} from './conversationModel';
import {BeachCleaningEventModel} from './beachCleaningEventModel';
import {LoggedUserModel} from './loggedUserModel';
import {MyCleaningEventModel} from './myCleaningEventModel';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiUrl = 'https://ok1idm43pk.execute-api.us-east-1.amazonaws.com/dev/';

  constructor(private http: HttpClient) { }

  getClosestBeaches(userId): Observable<Array<BeachModel>> {
    return this.http.get<BeachModel[]>(this.apiUrl + 'users/' + userId + '/nearestBeaches').pipe(map(beachList => {
      return BeachModel.buildFromResponse(beachList);
    }));
  }

  getConversationsForUser(userId): Observable<Array<ConversationModel>> {
      return this.http.get<BeachModel[]>(this.apiUrl + 'users/' + userId + '/conversations').pipe(map(conversationList => {
          return ConversationModel.buildFromResponse(conversationList);
      }));
  }

  getCleaningBeachEvents(beachId: string): Observable<Array<BeachCleaningEventModel>> {
    return this.http.get<BeachCleaningEventModel[]>(this.apiUrl + 'beachs/' + beachId + '/cleaning-events').pipe(map( beachCleanEventList => {
      return BeachCleaningEventModel.buildFromResponse(beachCleanEventList);
    }));
  }

  assignBeachCleanEvent(beachCleanEvent: BeachCleaningEventModel, userLogged: LoggedUserModel): any {
    // TODO: Still not implemented in backend!
    return this.http.post(this.apiUrl, {beachCleanEvent, userLogged});
  }

  addFinishClean(photo: string, cleaningEventId: string, userLogged: LoggedUserModel): Observable<any> {
    return this.http.post(this.apiUrl + 'users/' + userLogged.id + '/cleaning-events/' + cleaningEventId, {});
  }

  getCleaningEventsForUser(userId: string): Observable<Array<MyCleaningEventModel>> {
    return this.http.get<BeachCleaningEventModel[]>(this.apiUrl + 'users/' + userId + '/cleaning-events').pipe(map(beachCleanEventList => {
      return MyCleaningEventModel.buildFromResponse(beachCleanEventList);
    }));
  }

  unjoinFromEvent(userId, eventId): Observable<any> {
    return this.http.delete(this.apiUrl + 'users/' + userId + '/cleaning-events/' + eventId);
  }
}
