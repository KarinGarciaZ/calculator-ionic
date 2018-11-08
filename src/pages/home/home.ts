import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  operation: string = '';
  result: string = '';

  constructor(public navCtrl: NavController) {

  }

  addToOperation( num ) {
    if ( this.isNumber(num) ){
      this.operation = this.operation + num;
      let total = eval(this.operation);
      this.result = total;
    } 
    else 
      this.operation = this.operation + num;
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

}
