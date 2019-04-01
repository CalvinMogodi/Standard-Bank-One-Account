import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, Loading, MenuController, IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TermsandconditionsPage } from '../termsandconditions/termsandconditions';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt: boolean = false;
  showError: boolean = false;
  dbUser: any;
  loader: any;
  public user = {
    email: '',
    password: '',
  }
  public fireAuth: any;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
       public toastCtrl: ToastController, public loadingCtrl: LoadingController, private menuCtrl: MenuController) {

    this.menuCtrl.enable(false);
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  forgotpassword() {
     this.navCtrl.push(ForgotpasswordPage);
  }
  termsandconditions(){
    this.navCtrl.push(TermsandconditionsPage);
  }

  signIn() {  
      this.navCtrl.setRoot(HomePage);  
  }

  loginUser(username, password){
  }
}
