import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, ToastController, AlertController, LoadingController, Loading, Nav } from 'ionic-angular';
import { Camera, File } from 'ionic-native';
import { FrameApplier } from '../FrameApplier/frameapplier'
// import 'rxjs/add/operator/map';

declare var cordova: any;
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class TeamPhotos {
public photos: any;
public base64Images:any;
public errorMessage:any;
public tempImage: string = null;
public path: string = null;
public navi: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public alertCtrl: AlertController, public loadingCtrl:LoadingController, public nav: Nav) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json').subscribe(data =>
      this.photos = data.json());
      console.log(this.photos);
  }
  // this.http.get('  https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json').subscribe(data =>
  //     this.errorMessage = data.json());
  //     console.log(this.photos);
  // }


    public takePhotos(){
      console.log(cordova.file);
      var options = {
        quality: 100,
        saveToPhotoAlbum:false,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 400, //Lebar hasil foto
        targetHeight: 400, // Panjang atau tinggi hasil foto
        correctOrientation:true
      }
      Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Images = 'data:image/jpeg;base64,' + imageData;
       this.tempImage = this.base64Images;
       this.navCtrl.push(FrameApplier, {base64: this.tempImage}); //pindah halaman ke FrameApplier dengan bawa data gambar hasil foto
      }, (err) => {
      // Handle error
      });
    }

    public loadLibrary(){
    Camera.getPicture({
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 400, //Lebar hasil foto
        targetHeight: 400, // Panjang atau tinggi hasil foto
       }).then((imageData) => {
         let base64Images = 'data:image/jpeg;base64,'+imageData;
         this.tempImage = base64Images;
         this.navCtrl.push(FrameApplier, {base64: this.tempImage}); //pindah halaman ke FrameApplier dengan bawa data gambar hasil foto
       }, (error) => {
         console.log(error);
       });
     }

     pathForImage(img){
        if(img === null){return '';}
        else{
          this.path = 'asd';
          this.path = cordova.file.dataDirectory + img;
        }
      }

     presentToast(text) {
     let toast = this.toastCtrl.create({
     message: text,
     duration: 5000,
     position: 'top'
   });
   toast.present();
 }

// Copy the image to a local folder
 copyFileToLocalDir(namePath, currentName, base64Image){
       File.copyFile(namePath, currentName, cordova.file.dataDirectory, base64Image).then(success =>
       {this.tempImage = base64Image;
       }, error =>{
         this.presentToast('Error while storing file.');
       });
     }

     navigate(){
       this.navi.setRoot(FrameApplier);
     }
    }
