import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private local:LocalStorageService,private router:Router) {
    if(this.local.retrieve('uid')){
      this.router.navigate(['home/tabs/tab1'])
    }else{
      this.router.navigate([''])
    }
  }
}
