import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

import { Camera } from '@ionic-native/camera/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

//9/23/19
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
var config = {
  apiKey: "AIzaSyBEQQ_8Ci9Jzi-zb4fVmjDY22HefU5j6j4",
    authDomain: "chatapp-d8134.firebaseapp.com",
    databaseURL: "https://chatapp-d8134.firebaseio.com",
    projectId: "chatapp-d8134",
    storageBucket: "",
    messagingSenderId: "785472366687"
};

import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpModule,HttpClientModule,BrowserModule,FormsModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(config),AngularFirestoreModule.enablePersistence(),AngularFireAuthModule],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    NativeStorage,
    Camera,
    LocalNotifications,
    Geolocation,
    NativeGeocoder,
    AndroidFingerprintAuth,
    HttpClient,
    HttpClientModule,
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy 
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
