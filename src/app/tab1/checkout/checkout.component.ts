import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent  implements OnInit {
  value: any;
  shipping: number = 30;

  constructor(private location:Location, private localStorage:LocalStorageService,private activeRoute:ActivatedRoute,private router:Router,private shop:StoreService) { }
  public address:any
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.value=parseFloat(res.totalValue)
    })
    this.address=JSON.parse(this.localStorage.retrieve('user'))[0]
    console.log(this.address);
    this.shipping = this.getRandomNumber();
  }
  back(){
    this.location.back()
    
    
  }
  returnAddress(address:any){
    return   address 
    .split('') 
    .map((char: string) => (char === ' ' ? '%20' : char)) 
    .join(''); 
  }
  proceedToOrder(){
    this.shop.cartData=[]
    this.router.navigate(['order-placed'])
  }
  getRandomNumber(){
    return Math.floor(Math.random() * (50 - 30 + 1)) +  30;
  }
}
