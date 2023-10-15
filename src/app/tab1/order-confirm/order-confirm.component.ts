import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss'],
})
export class OrderConfirmComponent  implements OnInit {
  orderId='OD'+Math.floor(Math.random() * 10000000000000);
  constructor(private router:Router) { }
  options: AnimationOptions = {
    path: '../../../assets/animation.json',
    loop:false
  };

  ngOnInit() {}
  goToHome(){
    this.router.navigate(['/home/tabs/tab1'])
  }
}
