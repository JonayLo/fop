import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeachModel} from './beachModel';
import {map} from 'rxjs/internal/operators';
import {BeachCleaningEventModel} from './beachCleaningEventModel';
import {LoggedUserModel} from './loggedUserModel';

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

  getCleaningBeachEvents(beachId: string): Observable<Array<BeachCleaningEventModel>> {
    return this.http.get<BeachCleaningEventModel[]>(this.apiUrl + 'cleaningEvents/' + beachId).pipe(map( beachCleanEventList => {
      return BeachCleaningEventModel.buildFromResponse(beachCleanEventList);
    }));
  }

  assignBeachCleanEvent(beachCleanEvent: BeachCleaningEventModel, userLogged: LoggedUserModel): any {
    return this.http.post(this.apiUrl + 'test/', {beachCleanEvent, userLogged});
  }
}
