import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {RestApiService} from '../rest-api.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-clean-finish',
  templateUrl: './clean-finish.page.html',
  styleUrls: ['./clean-finish.page.scss'],
})
export class CleanFinishPage implements OnInit {

  private finishClean: any = {};

  constructor(private camera: Camera, private restApiService: RestApiService, private toastController: ToastController) { }

  ngOnInit() {
  }

  onFinishClean(): void {
    this.restApiService.addFinishClean(this.finishClean).subscribe(() => {
        this.presentToast();
    });
  }

  async presentToast() {
      const toast = await this.toastController.create({
            message: 'Your settings have been saved.',
            duration: 2000
        });
        toast.present();
    }

    onTakePicture(): void {

      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then((imageData) => {
          this.finishClean.photo = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
          console.log(err);
      });
  }



}
