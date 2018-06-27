import { Injectable } from '@angular/core';
import { BMI } from '../../models/BMI.model';


@Injectable()
export class BmiServiceProvider {

  constructor() {
  }

  calculateBMI(height: number, weight: number) {
    const calculatedBMI = (weight / Math.pow(height, 2));
    return <BMI>{
      BMI: calculatedBMI.toFixed(2),
      classification: this.classifyBMI(calculatedBMI)
    }
  }

  classifyBMI(BMI: number) {
    if (BMI < 18.5) {
      return 'น้ำหนักน้อย / ผอม'
    } else if (BMI > 18.5 && BMI < 22.9) {
      return 'ปกติ(สุขภาพดี)'
    } else if (BMI > 23 && BMI < 24.9) {
      return 'ท้วม / โรคอ้วนระดับ 1'
    } else if (BMI > 25 && BMI < 29.9) {
      return 'ท้วม / โรคอ้วนระดับ 2'
    } else {
      return 'อ้วนมาก / โรคอ้วนระดับ 3'
    }
  }
}
