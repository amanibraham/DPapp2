import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { ViewPatternPage } from '../pages/view-pattern/view-pattern';
//
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SearchPatternPage } from '../pages/search-pattern/search-pattern';
import {ListPatternPage} from '../pages/list-pattern/list-pattern';
import {AddPatternPage} from '../pages/add-pattern/add-pattern';

import { SuperTabsModule } from 'ionic2-super-tabs';
//import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule, MatToolbarModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule } from "@angular/material";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    ViewPatternPage,
    DashboardPage,
    SearchPatternPage,
    ListPatternPage,
    AddPatternPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    ViewPatternPage,
    DashboardPage,
    SearchPatternPage,
    ListPatternPage,
    AddPatternPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
