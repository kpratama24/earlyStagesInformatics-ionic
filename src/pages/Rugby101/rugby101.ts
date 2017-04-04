import { Component } from '@angular/core';
import { News } from '../News/news';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-rugby101',
  templateUrl: 'rugby101.html'
})
export class Rugby101 {
public nav:any;
constructor(public navCtrl: NavController) {
      this.nav = navCtrl;
  }
  navigate() {
          this.nav.setRoot(News);
      }
}
