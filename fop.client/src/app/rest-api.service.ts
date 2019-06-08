import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeachModel} from './beachModel';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private apiUrl = 'https://ok1idm43pk.execute-api.us-east-1.amazonaws.com/dev/';
  constructor(private http: HttpClient) { }


  getClosestBeaches(): Observable<Array<BeachModel>> {
    return this.http.get<Array<BeachModel>>(this.apiUrl + 'nearestBeaches');
  }
}
