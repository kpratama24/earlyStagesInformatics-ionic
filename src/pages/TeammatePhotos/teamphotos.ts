import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import 'rxjs/add/operator/map';
import { News } from '../News/news'
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class TeamPhotos {
public photos: any;
public nav:any;
  constructor(public http: Http,public navCtrl: NavController) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json').subscribe(data =>
      this.photos = data.json());
      console.log(this.photos);this.nav = navCtrl;
  }

    public takePhotos(){
      Camera.getPicture().then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
      });
    }
    navigate() {
            this.nav.setRoot(News);
        }
}
