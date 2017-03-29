import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {RugbyService} from '../../app/services/rugbyService'
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class News {
  public newsInfo: any;

  /*
  http.get untuk ambil data dari web
  Subscribe untuk akses datanya dan disimpan ke var newsInfo
  */

  constructor(private http:Http) {
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json')
            .subscribe(data => this.newsInfo = data.json());
  }
}
