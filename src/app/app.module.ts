import { WealthPage } from './../pages/wealth/wealth-page';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MinePage} from "../pages/mine/mine-page";
import {TabsPage} from "../pages/tabs/tab-page";
import {AddBillPage} from "../pages/bill/add-bill/add-bill-page";
import {IonicStorageModule} from "@ionic/storage";
import {SQLite} from "@ionic-native/sqlite";
import {SaveBillPage} from "../pages/bill/save-bill/save-bill-page";
import {DatePipe} from "@angular/common";
import {HttpService} from "../service/http-service";
import {HttpClientModule} from "@angular/common/http";
import {BillService} from "../service/bill-service";
import {StorageService} from "../service/storage-service";
import {Dialogs} from "@ionic-native/dialogs";
import {BillProvider} from "../providers/bill-provider";
import {SqLiteProvider} from "../providers/sqlite-provider";



@NgModule({
  declarations: [
    MyApp,
    AddBillPage,
    MinePage,
    TabsPage,
    SaveBillPage,
    WealthPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md'
    }),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddBillPage,
    MinePage,
    TabsPage,
    SaveBillPage,
    WealthPage
  ],
  providers: [
    StatusBar,
    SQLite,
    BillProvider,
    SqLiteProvider,
    SplashScreen,
    DatePipe,
    BillService,
    StorageService,
    Dialogs,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
