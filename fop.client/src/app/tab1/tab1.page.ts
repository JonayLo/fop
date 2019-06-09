import {Component} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {BeachModel} from '../beachModel';
import {OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    closestBeaches: Array<BeachModel>;
    userAvatarUrl: string;


    constructor(private restApi: RestApiService, private loginService: LoginService, private route: Router) {

    }

    ngOnInit(): void {
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

    onSetting(): void {
        // TODO: Logout directly, maybe in the future show a modal with different options...
        this.loginService.logout();
        this.route.navigate(['/login']);
    }

}
