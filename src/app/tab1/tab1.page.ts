import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { log } from 'console';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  imgSourse: string = '';
  catagory: any;
  newArrivals: any;
  electrodata: any;
  constructor(
    public shop: StoreService,
    private router: Router,
    private local: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.imgSourse = JSON.parse(this.local.retrieve('user'))[0].picture?.medium;

    this.getCatagory();
    this.getLimitedItems();
    this.getElectro();
    this.shop.getCart()
  }

  getCatagory() {
    this.shop.getcatagory().subscribe((res: any) => {
      this.catagory = res;
    });
  }
  getLimitedItems() {
    this.shop.getLimitedProduct(5).subscribe((res: any) => {
      console.log(res);
      this.newArrivals = res;
    });
  }
  getSrc(name: string) {
    switch (name) {
      case 'electronics':
        return '../../assets/elect.png';
        break;
      case 'jewelery':
        return '../../assets/jewl.png';
        break;
      case "men's clothing":
        return '../../assets/men.png';
        break;
      case "women's clothing":
        return '../../assets/women.png';
        break;

      default:
        return '';
        break;
    }
  }
  getElectro() {
    this.shop.getProductByCatagroy('electronics').subscribe((res: any) => {
      this.electrodata = res;
    });
  }
  routeToProduct(productId: number) {
    this.router.navigate(['product'], { queryParams: { productId } });
  }
  goToAllProduct(catagory: string) {
    this.router.navigate(['all-product'], { queryParams: { catagory } });
  }
  routeToProfile() {
    this.router.navigate(['profile']);
  }
  routeToSearch() {
    this.router.navigate(['search']);
  }
  routeToCart() {
    this.router.navigate(['cart']);
  }
}
