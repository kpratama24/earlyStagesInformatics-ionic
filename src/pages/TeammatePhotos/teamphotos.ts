import { Component } from '@angular/core';

<<<<<<< HEAD
=======
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';

>>>>>>> a4dd0ef496de413d8a8ca24504f0323c3ce7c176
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class TeamPhotos {

  constructor(public navCtrl: NavController) {

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
}
