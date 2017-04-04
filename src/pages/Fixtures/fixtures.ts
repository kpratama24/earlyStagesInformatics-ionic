import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {

  fixturesInfo : any;

  constructor(public http:Http) {
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json')
            .subscribe(data => this.fixturesInfo = data.json());
  }

}
