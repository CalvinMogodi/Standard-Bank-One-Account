import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAccountPage } from '../addaccount/addaccount';
import { HomePage } from '../home/home'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AccountDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountdetail',
  templateUrl: 'accountdetail.html',
})
export class AccountDetailPage {

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  edit() {
    this.navCtrl.push(AddAccountPage, {hasAccount: true});
  }
  delete(){
    this.storage.set("hasAccount", false);
    this.navCtrl.setRoot(HomePage, {hasAccount: false});
  }

}
