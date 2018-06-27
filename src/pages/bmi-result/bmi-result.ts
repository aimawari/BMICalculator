import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BmiServiceProvider } from './../../providers/bmi-service/bmi-service';
import { BMI } from '../../models/BMI.model';

/**
 * Generated class for the BmiResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi-result',
  templateUrl: 'bmi-result.html',
})
export class BmiResultPage {
  bmi: BMI

  constructor(public navCtrl: NavController, public navParams: NavParams, private bmiServiceProvider: BmiServiceProvider) {
    
  }

  ionViewWillLoad(){
    let height = this.navParams.get("height");
    let weight = this.navParams.get("weight");

    this.bmi = this.bmiServiceProvider.calculateBMI(height,weight);
    console.log(this.bmi)
  }
}
