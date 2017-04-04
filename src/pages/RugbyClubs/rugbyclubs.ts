import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { News } from '../News/news'
@Component({
  selector: 'page-rugbyclubs',
  templateUrl: 'rugbyclubs.html'
})
export class RugbyClubs {

  clubs : any;
public nav:any;
  constructor(public http: Http,public navCtrl: NavController) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json').subscribe(data =>
      this.clubs = data.json());
this.nav = navCtrl;
  }
  navigate() {
          this.nav.setRoot(News);
      }
}
