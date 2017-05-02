import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { FrameApplier} from '../FrameApplier/frameapplier'
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class TeamPhotos {
public photos: any;
public base64Images:any;
public errorMessage:any;
  constructor(public navCtrl: NavController,public http: Http) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json').subscribe(data =>
      this.photos = data.json());
      console.log(this.photos);
  }
  // this.http.get('  https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json').subscribe(data =>
  //     this.errorMessage = data.json());
  //     console.log(this.photos);
  // }


    public takePhotos(){
      Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 600, //Lebar hasil foto
        targetHeight: 600, // Panjang atau tinggi hasil foto
        saveToPhotoAlbum: true,
        correctOrientation:true
      }

      ).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      let tempImage = base64Image;
      this.navCtrl.push(FrameApplier, {base64: tempImage});
      }, (err) => {
      // Handle error
      });
    }
    public loadLibrary(){
    Camera.getPicture({
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
        destinationType: Camera.DestinationType.DATA_URL
       }).then((imageData) => {
         let base64Images = 'data:image/jpeg;base64,'+imageData;
        }, (err) => {
      //   console.log(err);
       });
     }
    }
