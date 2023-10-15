import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  constructor(private location:Location,private shop:StoreService,private router:Router) { }
  public allProduct:any=[]
  public searchData=''
  public displayProduct:any=[]
  ngOnInit() {
    this.shop.getAllProduct().subscribe((res:any)=>{
      this.allProduct=res
    })
  }
  back(){
    this.location.back()
  }
  search(){
    if(this.searchData){
    this.displayProduct=this.allProduct.filter((ele:any)=>{
      if(ele.title.toLowerCase().includes(this.searchData)){
        return ele;
      }
    })}else{
      this.displayProduct=[]
    }
    
  }
  routeToProduct(productId:number){
    this.router.navigate(['product'],{queryParams:{productId}})
  }
  voiceSearch(){
    
  }
}
