import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  obj : Observable<any>
  constructor(
    public http: HttpClient
  ) {
    console.log('Hello ProductProvider Provider');
  }
  getProducts(callback){
    this.obj = this.http.get('http://localhost:1900/getproducts')
    this.obj.subscribe(
      data => {
        console.log("getProducts",data)
        callback(data)
      },
      err => {
        console.log("getProducts",err)
        callback(err)
      }
    )
  }
}
