import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePriceDialogPage } from './change-price-dialog';

@NgModule({
  declarations: [
    ChangePriceDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangePriceDialogPage),
  ],
})
export class ChangePriceDialogPageModule {}
