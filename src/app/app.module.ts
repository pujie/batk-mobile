import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';
import { HttpClientModule } from '@angular/common/http';
import { ChangePriceDialogPage } from '../pages/change-price-dialog/change-price-dialog';
import { AppvarProvider } from '../providers/appvar/appvar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChangePriceDialogPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  exports: [
    ChangePriceDialogPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChangePriceDialogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    AppvarProvider
  ]
})
export class AppModule {}
