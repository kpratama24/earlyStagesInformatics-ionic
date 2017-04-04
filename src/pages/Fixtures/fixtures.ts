import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { News } from '../News/news';
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {

  fixturesInfo : any;
public nav:any;
  constructor(public http:Http,public navCtrl: NavController) {
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json')
            .subscribe(data => this.fixturesInfo = data.json());
              this.nav = navCtrl;
  }
  navigate() {
          this.nav.setRoot(News);
      }
}
