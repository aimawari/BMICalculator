import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmiCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi-calculator',
  templateUrl: 'bmi-calculator.html',
})
export class BmiCalculatorPage {
  height:number;
  weight:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiCalculatorPage');
  }

  calculateBMI(){
    this.navCtrl.push('BmiResultPage',{height: this.height,weight: this.weight})
  }

}
