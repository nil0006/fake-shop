import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent  implements OnInit {

  constructor(private router:Router,private shop:StoreService,private local:LocalStorageService) { }

  ngOnInit() {
    if(!this.local.retrieve('user')){        
      this.shop.getRandomUser().subscribe((res:any)=>{
        this.local.store('user',JSON.stringify(res.results))
      })}
  }
  goToRegister(){
    this.router.navigate(['register'])
  }
  goToLogin(){
    this.router.navigate(['login'])
  }
}
