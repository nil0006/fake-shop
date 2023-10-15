import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider ,
  signInWithPopup,
} from '@angular/fire/auth'
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth,private localStorage:LocalStorageService,private router:Router) { }
  
  async register(email:string,password:any){
    const user = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
      );
    return user;
  }
  async login(email:string,password:any) {
    const user = await signInWithEmailAndPassword(
       this.auth,
       email,
       password
       );
    return user;
  }
    async signOut(){
       this.auth.signOut();
       this.localStorage.clear()
       this.router.navigate([''])
    }
}
