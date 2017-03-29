import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-rugbyclubs',
  templateUrl: 'rugbyclubs.html'
})
export class RugbyClubs {

  clubs : any;

  constructor(public http: Http) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json').subscribe(data =>
      this.clubs = data.json());

  }

}
