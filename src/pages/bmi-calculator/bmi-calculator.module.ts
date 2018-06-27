import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmiCalculatorPage } from './bmi-calculator';

@NgModule({
  declarations: [
    BmiCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(BmiCalculatorPage),
  ],
})
export class BmiCalculatorPageModule {}
