import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  constructor(private location:Location,private local:LocalStorageService,private authService:AuthService) { }
  public profileData:any
  ngOnInit() {

    this.profileData=JSON.parse(this.local.retrieve('user'))[0]
  }
  back(){
    this.location.back()
  }
  signOut(){
    this.authService.signOut()
  }
}
