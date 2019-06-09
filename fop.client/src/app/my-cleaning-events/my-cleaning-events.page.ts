import { Component } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {LoginService} from '../login/login.service';
import {MyCleaningEventModel} from '../myCleaningEventModel';
import {AlertController} from '@ionic/angular';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-my-cleaning-events',
  templateUrl: './my-cleaning-events.page.html',
  styleUrls: ['./my-cleaning-events.page.scss'],
})
export class MyCleaningEventsPage {

  myCleaningEvents: MyCleaningEventModel[];

  constructor(private restApiService: RestApiService, private loginService: LoginService, private alertController: AlertController) { }

  ionViewWillEnter(): void {
      this.loginService.getUserAlreadyLogged().subscribe(loggedUserData => {
          this.loadConversationsForUser(loggedUserData.id);
      });
  }

    loadConversationsForUser(userId): void {
        this.restApiService.getCleaningEventsForUser(userId).subscribe(myCleaningEvents => {
            this.myCleaningEvents = myCleaningEvents;
        });
    }

    remove(event, eventId: string): void {
        event.stopPropagation();
        this.loginService.getUserAlreadyLogged().subscribe(loggedUserData => {
            this.restApiService.unjoinFromEvent(loggedUserData.id, eventId).subscribe(async () => {
                this.myCleaningEvents = [];
                await this.presentAlert();
            });
        });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Cancelación completada',
            subHeader: '',
            message: 'Has abandonado este evento de forma satisfactoria.',
            buttons: ['OK']
        });

        await alert.present();
    }
}
