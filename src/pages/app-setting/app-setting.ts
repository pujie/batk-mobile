import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppvarProvider } from '../../providers/appvar/appvar';

/**
 * Generated class for the AppSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-setting',
  templateUrl: 'app-setting.html',
})
export class AppSettingPage {
  server = {
    host:'',
    port:''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appvar: AppvarProvider
  ) {
    this.server.host = this.appvar.host
    this.server.port = this.appvar.port
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppSettingPage');
  }
  updateSetting(server){
    this.appvar.host = server.host
    this.appvar.port = server.port
    this.appvar.server = server.host+":"+server.port
  }
}
