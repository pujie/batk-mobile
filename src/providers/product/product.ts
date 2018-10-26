import { HttpClient,HttpHeaders } from '@angular/common/http';
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
  httpoptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(
    public http: HttpClient,
    private appvar: AppvarProvider
  ) {
    console.log('Hello ProductProvider Provider');
  }
  getProducts(callback){
    this.obj = this.http.get('http://belanjaatk.co.id/jsons/index')
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
  updateProduct(paramdata,callback){
    console.log("UPdate Data",paramdata)
    let realdata = {
      id:paramdata.id,
      name:paramdata.name,
      sellingprice:paramdata.sellingprice
    }
    this.obj = this.http.post('/updateproduct',realdata, {
      headers: { 'Content-Type': 'application/json' }
  })
    this.obj.subscribe(
      data => {
        console.log("Data Received",data)
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
