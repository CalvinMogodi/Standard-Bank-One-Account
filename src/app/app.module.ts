import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module'
import { RegisterPageModule } from '../pages/register/register.module'
import { TermsandconditionsPageModule } from '../pages/termsandconditions/termsandconditions.module'
import { AccountDetailPageModule } from '../pages/accountdetail/accountdetail.module'
import { AddAccountPageModule } from '../pages/addaccount/addaccount.module'



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegisterPageModule,
    TermsandconditionsPageModule,
    AccountDetailPageModule,
    AddAccountPageModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['sqlite', 'indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
