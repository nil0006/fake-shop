import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private authService:AuthService,private router:Router,private lcoal:LocalStorageService) { }
  email:string=''
  password:any=''
  isToastOpen:boolean = false;
  msgData=''

  ngOnInit() {}
  async login() {
    this.authService.login(this.email,this.password).then(res=>{
      console.log(res.user.uid);
      this.lcoal.store('uid',res.user.uid);
      this.router.navigate(['home/tabs/tab1'])
    }).catch(err=>{
      if (err) {
        this.msgData='Invalid Username Password'
        this.setOpen(true)
      }
    })
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  goToRegister(){
    this.router.navigate(['register'])
  }
}
