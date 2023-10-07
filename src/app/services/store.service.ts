import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

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
}
