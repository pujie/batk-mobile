import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppvarProvider {
  host = "http://localhost"
  port = "1900"
  server = this.host+":"+this.port
  constructor(public http: HttpClient) {
    console.log('Hello AppvarProvider Provider');
  }

}
