import { Component } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {BeachModel} from '../beachModel';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  closestBeaches: Array<BeachModel>;

  constructor(private restApì: RestApiService) {

  }

  ngOnInit(): void {
    this.initializeClosestBeaches();
  }

  initializeClosestBeaches(): void {
    this.restApì.getClosestBeaches().subscribe((closestBeaches: Array<BeachModel>) => {
      this.closestBeaches = closestBeaches;
      console.log(this.closestBeaches);
    });
  }

}
