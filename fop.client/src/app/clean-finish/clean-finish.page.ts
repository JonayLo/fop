import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {RestApiService} from '../rest-api.service';
import {AlertController, ToastController} from '@ionic/angular';
import {LoggedUserModel} from '../loggedUserModel';
import {LoginService} from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {File} from '@ionic-native/file/ngx';

@Component({
    selector: 'app-clean-finish',
    templateUrl: './clean-finish.page.html',
    styleUrls: ['./clean-finish.page.scss'],
})
export class CleanFinishPage implements OnInit {

    private beachCleanPhoto: any = null;
    private loggedUser: LoggedUserModel;
    private beachCleanEventId: string;

    constructor(private file: File, private camera: Camera, private restApiService: RestApiService, private toastController: ToastController, private alertController: AlertController, private loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.beachCleanEventId = params.cleanId;
        });
        this.loginService.getUserAlreadyLogged().subscribe(userLogged => {
            this.loggedUser = userLogged;
        });
    }

    onFinishClean(): void {
        if (this.beachCleanPhoto) {
            this.restApiService.addFinishClean(this.beachCleanPhoto, this.beachCleanEventId, this.loggedUser).subscribe(() => {
                this.showSuccessClean();
            });
        } else {
            this.showPhotoHasNotBeenTaken();
        }
    }

    async showPhotoHasNotBeenTaken() {
        const toast = await this.toastController.create({
            message: '¡Toma una foto antes de subir tu limpieza!',
            duration: 2000
        });
        toast.present();
    }

    async showSuccessClean() {
        const alert = await this.alertController.create({
            header: '¡Limpieza enviada!',
            message: 'Gracias por ayudar.',
            buttons: ['Compartelo en Google!', 'Compartelo en Facebook!', 'Compartelo en Twitter!']
        });
        alert.present();
    }

    onTakePicture(): void {

        const options: CameraOptions = {
            quality: 45,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            const filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            const path =  imageData.substring(0, imageData.lastIndexOf('/') + 1);
            this.file.readAsDataURL(path, filename).then(res => this.beachCleanPhoto = res);
        });
    }
}
