import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, Loading, MenuController, IonicPage } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  signUpFirstForm: FormGroup;
  signUpSecondForm: FormGroup;
  submitAttempt: boolean = false;
  secondSubmitAttempt: boolean = false;
  showError: boolean = false;
  message: string;
  database: any;
  referredBy: any;
  showPasswordError = false;
  peoples = [];

  public account = {
    name: '',
    surname: '',
    cellPhone: '',
    email: '',
    password: '',
    confirmPassword: '',
    referredBy: '',
    referredByUser: '',
    address: '',
    accountNumber: '',
    profilePicture: '',
    IDNumber: '',
    bankName: '',
    userType: 'User',
    isActive: false,
    points: 0,
    displayName: '',
    country: 'South Africa',
    uploadedIDNumberPassport: false,
    uploadedProfileImage: false,
    uploadedPOP: false,
    createdDate: 0,
    changedPassword: true,
    paymentReference: '',
    referrerIsPaid: false,
    membershipNo: ''
  }
  selectImagePath = 'assets/imgs/ic_person_black.png';
  public step = 1;
  constructor(private menuCtrl: MenuController, public navCtrl: NavController, public formBuilder: FormBuilder, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.menuCtrl.enable(false);
    this.signUpFirstForm = formBuilder.group({
      email: '',
      password: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      surname: ['', Validators.compose([Validators.required])],
      cellPhone: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });

    this.signUpSecondForm = formBuilder.group({
      referredBy: ['', Validators.compose([Validators.required])],
      country: ['South Africa', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      accountNumber: ['', Validators.compose([Validators.required])],
      IDNumber: ['', Validators.compose([Validators.required])],
      bankName: ['', Validators.compose([Validators.required])],
    });
  }

  back() {
    this.step = 1;
  }

  addFocus() {
    return true;
  }

  search() {

  }

  removeFocus() {
    return false;
  }

  addNote(item) {
    this.referredBy = item.name + ' ' + item.surname + ' - ' + item.IDNumber;
    this.account.referredByUser = item.name + ' ' + item.surname;
    this.account.referredBy = item.key;
    this.peoples = [];
  }

  dateToTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  getRandom(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
  }

  next() {
    this.navCtrl.setRoot(LoginPage);
  }
}
