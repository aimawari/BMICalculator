import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  height: number;
  weight: number;
  result: number;
  classify: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.height = this.navParams.get("height");
    this.weight = this.navParams.get("weight");

    this.result = parseFloat((this.weight / Math.pow(this.height, 2)).toFixed(2));
  
    if(this.result<15){
      this.classify = "Very severely underweight";
    }else if(this.result>15&&this.result<16){
      this.classify = "Severely underweight";
    }else if(this.result>16&&this.result<18.5){
      this.classify = "Underweight";
    }else if(this.result>18.5&&this.result<25){
      this.classify = "Normal (healthy weight)";
    }else if(this.result>25&&this.result<30){
      this.classify = "Overweight";
    }else if(this.result>30&&this.result<35){
      this.classify = "Moderately obese";
    }else if(this.result>35&&this.result<40){
      this.classify = "Severely obese";
    }else{
      this.classify = "Very severely obese"
    }
  }
}
