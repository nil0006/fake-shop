import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './tab1/product/product.component';
import { AllProductComponent } from './tab1/all-product/all-product.component';
import { ProfileComponent } from './tab1/profile/profile.component';
import { SearchComponent } from './tab1/search/search.component';
import { CartComponent } from './tab1/cart/cart.component';
import { CheckoutComponent } from './tab1/checkout/checkout.component';
import { OrderConfirmComponent } from './tab1/order-confirm/order-confirm.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'all-product',
    component: AllProductComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path:'order-placed',
    component:OrderConfirmComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
