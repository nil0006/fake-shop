import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider ,
  signInWithPopup,
} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth,) { }
  
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
  
}
