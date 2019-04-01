import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountDetailPage} from '../accountdetail/accountdetail'
import { AddAccountPage } from '../addaccount/addaccount'
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 hasAccount: boolean = false;
  constructor(public storage: Storage,public navCtrl: NavController) {
    //this.uid = navParams.get('userData');
    this.storage.get('hasAccount').then((data)=>{
      this.hasAccount = data;
    });
  }

  viewAcountDetail(){
    this.navCtrl.push(AccountDetailPage);
  }

  addNewAcount(){
    this.navCtrl.push(AddAccountPage);
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

}
