import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  like : number;
  constructor(public navCtrl: NavController) {
  this.like = 0;
  }
  likePic(){
    this.like = this.like + 1;
  }

}
