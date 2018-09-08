import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ChangePriceDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-price-dialog',
  templateUrl: 'change-price-dialog.html',
})
export class ChangePriceDialogPage {
data={
  name:''
}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private product:ProductProvider,
    private viewCtrl: ViewController
  ) {
  //  console.log("Nav Params",this.navParams.data.name)
    this.data = this.navParams.data
   console.log("Nav Params",this.navParams)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePriceDialogPage');
  }
  updateProduct(data){
    console.log("Saveproduct",data)
    this.product.updateProduct(data,result => {
      console.log("Update Result",result)
      this.viewCtrl.dismiss()
    })
  }
  dismiss(){
    this.viewCtrl.dismiss()
  }
}
