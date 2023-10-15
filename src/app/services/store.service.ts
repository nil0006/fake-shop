import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public cartData: any=[];

  constructor(private http:HttpClient) { }
  private baseUrl='https://fakestoreapi.com/'

  public getAllProduct(){
    return this.http.get(this.baseUrl+'products')
  }
  public getSingleProduct(id:number){
    return this.http.get(this.baseUrl+`products/${id}`)
  }
  public getcatagory(){
    return this.http.get(this.baseUrl+'products/categories')
  }
  public getLimitedProduct(limit:number){
    return this.http.get(this.baseUrl+'products?limit='+limit)

  }
  public getProductByCatagroy(catagory:string){
    return this.http.get(this.baseUrl+'products/category/'+catagory)
  }
  public getRandomUser(){
    return this.http.get('https://randomuser.me/api/?gender=male')
  }
  public getCart(){
    this.http.get(this.baseUrl+'carts/3').subscribe((res:any)=>{
      this.getAllCartItemData(res.products)
    })
  }
  async getAllCartItemData(data:any){
    await data.forEach((element:any) => {
      this.getSingleProduct(element.productId).subscribe((res:any)=>{
        let obj={
          ...res,
          quantity:element.quantity
        }
        this.cartData.push(obj)
      })
    }); 
  }
}
