import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AppvarProvider } from '../appvar/appvar';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  obj : Observable<any>
  constructor(
    public http: HttpClient,
    private appvar: AppvarProvider
  ) {
    console.log('Hello ProductProvider Provider');
  }
  getProducts(callback){
    this.obj = this.http.get(this.appvar.server+'/getproducts')
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
  updateProduct(data,callback){
    this.obj = this.http.post(this.appvar.server+'/updateproduct',data)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
