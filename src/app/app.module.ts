import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ProductComponent } from './tab1/product/product.component';
import { AllProductComponent } from './tab1/all-product/all-product.component';
import { ProfileComponent } from './tab1/profile/profile.component';
import { SearchComponent } from './tab1/search/search.component';
import { CartComponent } from './tab1/cart/cart.component';
import { CheckoutComponent } from './tab1/checkout/checkout.component';
import { OrderConfirmComponent } from './tab1/order-confirm/order-confirm.component';
import { LottieModule } from 'ngx-lottie';


export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandingComponent,
    LoginComponent,
    ProductComponent,
    AllProductComponent,
    ProfileComponent,
    SearchComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmComponent,
  ],
  imports: [
    BrowserModule,

    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
