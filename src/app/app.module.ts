import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { SoftwareBoulevardApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';

import { SignupPage } from '../pages/signup/signup';


//software boulevard
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ListUsersPage } from '../pages/list-users/list-users';
//Module 5 components (Email communication)
import { ComposeEmailPage } from '../pages/compose-email/compose-email';
import { InboxPage } from '../pages/inbox/inbox';
import { MenuemailpopoverPage } from '../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../pages/reademail/reademail';
import { SentemailpagePage } from '../pages/sentemailpage/sentemailpage';


import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    SoftwareBoulevardApp,
    AccountPage,
    PopoverPage,
    SignupPage,

    LoginPage,
    MainPage,
    ComposeEmailPage,
    InboxPage,
    ListUsersPage,
    AboutPage,
    MenuemailpopoverPage,
    ReademailPage,
    SentemailpagePage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SoftwareBoulevardApp, {}, {
      links: [

        { component: AboutPage, name: 'About', segment: 'about' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        //software boulevard
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: MainPage, name: 'MainPage', segment: 'main' },
        { component: InboxPage, name: 'InboxPage', segment: 'inbox' },
        { component: ComposeEmailPage, name: 'ComposeEmailPage', segment: 'compose-email' },
        { component: ListUsersPage, name: 'ListUsersPage', segment: 'users' },
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SoftwareBoulevardApp,
    AccountPage,
    PopoverPage,
    SignupPage,

    LoginPage,
    MainPage,
    InboxPage,
    ComposeEmailPage,
    ListUsersPage,
    AboutPage,
    MenuemailpopoverPage,
    ReademailPage,
    SentemailpagePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }