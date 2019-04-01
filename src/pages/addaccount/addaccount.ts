import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,ToastController, ActionSheetController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'

/**
 * Generated class for the AddAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addaccount',
  templateUrl: 'addaccount.html',
})
export class AddAccountPage {
  public min = new Date().toJSON().split('T')[0];
  public max: any;
  benefits = ["24/7 Banker", "Airport Lounge Access", "Travel Discounts", "POS", "Shifty"];
  titles =
  [
      "Mr",
      "Mrs",
      "Miss"
  ];
  constructor(public storage: Storage, public navCtrl: NavController, public camera: Camera,public platform: Platform,public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
      let date = new Date(new Date().getFullYear() + 10 + '-01-01');
      this.max = new Date(date).toJSON().split('T')[0];
  }

  openeditprofile() {
    let actionSheet = this.actionSheetCtrl.create({

      buttons: [
        {
          text: 'Take Photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.captureImage(false);
          }
        },
        {
          text: 'Choose Photo From Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.captureImage(true);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  async captureImage(useAlbum: boolean) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      ...useAlbum ? { sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM } : {}
    }

    this.camera.getPicture(options).then((imageData) => {
     
      
    }, (err) => {
     
    });

  }

  addAccount(){
    this.storage.set("hasAccount", true);
    this.navCtrl.setRoot(HomePage, {hasAccount: true});
  }

}
