import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent  implements OnInit {
  headder: string='';
  allProduct:any=[]

  constructor(private activeRoute:ActivatedRoute,private shop:StoreService,private location:Location,private router:Router) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.headder=res.catagory
      this.getAllProductByCatagory(res.catagory)
    })
  }
  getAllProductByCatagory(catagory:string){
    this.shop.getProductByCatagroy(catagory).subscribe((res:any)=>{
      console.log(res);
      this.allProduct=res
    })
  }
  back(){
    this.location.back()
  }
  routeToProduct(productId:number){
    this.router.navigate(['product'],{queryParams:{productId}})
  }
}
