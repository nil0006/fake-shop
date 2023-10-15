import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {
  constructor(public shop:StoreService,private location:Location,private router:Router) { }

  ngOnInit() {
   
  }
  back(){
    this.location.back()
  }
  
  increseCartQuantity(index:number){
    this.shop.cartData[index].quantity++
     
  }
  decreseCartQuantity(index:number){
    this.shop.cartData[index].quantity--
    if(this.shop.cartData[index].quantity==0)this.removeFromCart(index)
  }
  removeFromCart(index:number){
    this.shop.cartData.splice(index, 1)
  }
  getTotal(){
    let value=0
    this.shop.cartData.forEach((element:any) => {
        value = value +(element.price*element.quantity)
    });
    return value.toFixed(2);
  }
  proceedToCheckout(){
    this.router.navigate(['checkout'],{queryParams:{totalValue:this.getTotal()}})
  }
  buttonDisable(){
    if(this.getTotal()=='0.00'){
      return true
    }
    return false
  }
}
