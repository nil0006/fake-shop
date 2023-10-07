import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  email:string=''
  password:any=''
  confirmPassword:any=''
  isToastOpen:boolean = false;
  constructor(private authService:AuthService,private router:Router,private local:LocalStorageService) { }

  ngOnInit() {}
  async register(){
    if(this.password===this.confirmPassword){
   this.authService.register(this.email,this.password).then(res=>{
    console.log(res);
    this.local.store('uid',res.user.uid);
    this.router.navigate(['home/tabs/tab1'])
   }).catch(err=>{
    console.log(err);
    
   })
    }else{
      this.setOpen(true)
    }}
    setOpen(isOpen: boolean) {
      this.isToastOpen = isOpen;
    }
    goToLogin(){
      this.router.navigate(['login'])
    }
    

  }
