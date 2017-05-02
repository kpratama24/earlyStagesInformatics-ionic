import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-frameapplier',
  templateUrl: 'frameapplier.html'
})
export class FrameApplier {

  clubs : any;
public nav:any;
  constructor(public http: Http,public navCtrl: NavController) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json').subscribe(data =>
      this.clubs = data.json());
this.nav = navCtrl;
  }
  navigate() {
          this.nav.setRoot(FrameApplier);
      }
}
