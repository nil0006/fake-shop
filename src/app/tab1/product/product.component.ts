import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productData: any;
  ratingArr: any = [];
  simillerProducts: any = [];
  changeIconbool: boolean = true;
  discount: number = 5;
  constructor(
    private activeRoute: ActivatedRoute,
    private shop: StoreService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res: any) => {
      if (res.productId && res.productId != 0) {
        this.getProductData(res.productId);
      } else if (res.productId == 0) {
        this.productData = {
          category: "Workspace Essential",
          description:
            ' Great! Adjustable office chairs are designed to provide optimal comfort and support for users, regardless of their body type or work style. These chairs typically feature ergonomic design elements, such as adjustable height, tilt, and lumbar support, allowing users to customize their sitting position for maximum comfort. Some adjustable office chairs also include advanced features like massage functions, cooling and heating systems, and built-in headrests. By investing in a high-quality adjustable office chair, employees can maintain good posture, reduce discomfort and fatigue, and stay productive throughout the day.  ',
          id: 0,
          image: '../../../assets/pngwing.com (1).png',
          price: 399.95,
          rating: { rate: 4.5, count: 120 },
          title: 'adjustable office chair',
        };
        this.makeLoopArray(this.productData.rating.rate)
      }
    });
    this.discount = this.getRandNum();
  }
  getProductData(productId: any) {
    this.shop.getSingleProduct(productId).subscribe((res: any) => {
      this.productData = res;
      this.makeLoopArray(res.rating.rate);
      this.shop.getProductByCatagroy(res.category).subscribe((res: any) => {
        this.simillerProducts = res.filter(
          (x: any) => x.id != this.productData.id
        );
        console.log(this.simillerProducts);
      });
    });
  }
  makeLoopArray(rating: any) {
    this.ratingArr = [];
    for (let index = 0; index < Math.round(rating); index++) {
      this.ratingArr.push(index);
    }
  }
  back() {
    this.location.back();
  }
  routeToProduct(productId: number) {
    this.router.navigate(['product'], { queryParams: { productId } });
  }
  async share(data: any) {
    await Share.share({
      title: data.title,
      text: data.title,
      url: 'https://nilportfolio.netlify.app/',
      dialogTitle: data.title,
    });
  }
  cahngeIcon() {
    this.changeIconbool = !this.changeIconbool;
  }
  getRandNum() {
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }
  addToCart(){
    let obj={
      ...this.productData,
      quantity:1
    }
    const found = this.shop.cartData.findIndex((el:any) => el.id === this.productData.id);
    
      if(found==-1){
        this.shop.cartData.push(obj)
      }else{        
        this.shop.cartData[found].quantity++
      }
    
  }
}
