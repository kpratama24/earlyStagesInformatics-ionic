import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class News {
  public newsInfo: any;
  /*
  http.get untuk ambil data dari web
  map untuk konversi data dari bentuk String ke bentuk json yang bisa dibaca
  Subscribe untuk akses datanya dan disimpan ke var newsInfo
  */


  // constructor(public navCtrl: NavController, public http: Http) {
  //   this.http= http;
  //   this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json').map(res => res.json()).subscribe(data => {
  //       this.newsInfo = data.data.children;
  //   });
  // }
}
