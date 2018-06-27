import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmiResultPage } from './bmi-result';

@NgModule({
  declarations: [
    BmiResultPage,
  ],
  imports: [
    IonicPageModule.forChild(BmiResultPage),
  ],
})
export class BmiResultPageModule {}
