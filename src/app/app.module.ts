import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCxWdDrpmuSaxHALjjD4QnucbOwoClCmNE",
  authDomain: "fake-store-d8d7f.firebaseapp.com",
  projectId: "fake-store-d8d7f",
  storageBucket: "fake-store-d8d7f.appspot.com",
  messagingSenderId: "657157571384",
  appId: "1:657157571384:web:c67a78936ed373dcfd77cd",
  measurementId: "G-TVFYMZH8X8"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(firebaseConfig)), provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
