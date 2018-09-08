import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ChangePriceDialogPage } from '../change-price-dialog/change-price-dialog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products
  productArray
  constructor(
    public navCtrl: NavController,
    private product : ProductProvider,
    private modalCtrl : ModalController
  ) {
    console.log("Hi Puji")
    this.product.getProducts(result => {
      console.log("Result",result)
      this.products = result
    })
  }
  getItems(ev){
    this.product.getProducts(result => {
      console.log("Result",result)
      this.products = result

      const val = ev.target.value
      console.log("Val",val)
      if(val && val.trim() != ''){
        this.products = this.products.filter((item) => {
          console.log("Item",item)
          return (item.name.toLowerCase().indexOf(val.toString().toLowerCase()) > - 1)
        })
      }
    })

  }
  showChangeDialog(item){
    console.log("Show Change DIalog",item)
    const modal = this.modalCtrl.create(ChangePriceDialogPage,item)
    modal.present()
  }
}
