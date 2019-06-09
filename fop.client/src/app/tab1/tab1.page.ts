import {Component} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {BeachModel} from '../beachModel';
import {LoginService} from '../login/login.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    closestBeaches: Array<BeachModel>;
    userAvatarUrl: string;


    constructor(private restApi: RestApiService, private loginService: LoginService, private route: Router, private alertController: AlertController) {

    }

    ionViewWillEnter(): void {
        this.loginService.getUserAlreadyLogged().subscribe(loggedUserData => {
            this.initializeClosestBeaches(loggedUserData.id, loggedUserData.avatarUrl);
        });
    }

    initializeClosestBeaches(userId: string, avatarUrl: string): void {
        this.restApi.getClosestBeaches(userId).subscribe((closestBeaches: Array<BeachModel>) => {
            this.closestBeaches = closestBeaches;
            this.userAvatarUrl = avatarUrl;
        });
    }

    async onSetting() {
        const alert = await this.alertController.create({
            header: '¡Atención!',
            message: '¿Seguro que quieres salir hacer logout?',
            buttons: ['No', {
                text: 'Sí',
                handler: () => {
                    this.loginService.logout();
                    this.route.navigate(['/login']);
                }
            }]
        });
        alert.present();
    }

}
