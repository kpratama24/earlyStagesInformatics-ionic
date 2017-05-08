import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, NavParams, Nav, Loading, LoadingController, ToastController } from 'ionic-angular';
import { TeamPhotos } from '../TeammatePhotos/teamphotos';
//import 'rxjs/add/operator/map';

declare var cordova: any;
@Component({
  selector: 'page-frameapplier',
  templateUrl: 'frameapplier.html'
})

export class FrameApplier {
@ViewChild('myCanvas') myCanvas:ElementRef; //untuk mengakses komponen myCanvas
public  frame:string; // untuk parameter saat akan memilih frame
public loading:Loading; // Untuk memunculkan loading screen
public dataURL:String;
public path:string;
public lastImage:string;
public json:any;
public htt:Http;
public navi: any;
public clubs : any;
public base64Images: string;
constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public nav: Nav, public toastCtrl: ToastController) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json').subscribe(data =>
  this.json = data.json());
  this.navi = nav;
  this.base64Images = navParams.get('base64');
  }

/*
Ambil data gambar dari page Teammate Photos (foto/ gallery) lalu upload ke targetURL
*/
uploadImg(){
  // Destination URL
var targetURL = 'https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json';

this.path= ''; // File path

var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'}); // interface
var options = new RequestOptions({headers:headers});

this.loading= this.loadingCtrl.create({
  content: 'Uploading Photo..', // Untuk tampilan menunggu (spinning bar)
});
this.loading.present();
this.ngAfterViewInit();
this.dataURL = this.dataURL.replace(/^data:image\/[a-z]+;base64,/, "");
    var dat = 'userId=frameRugby&photo=' + this.dataURL;

this.http.post(targetURL, dat, options).subscribe(res => this.json = res.json());
this.loading.dismissAll(); // Menghilangkan loading screen
this.navigate();
}



ngAfterViewInit(){ // Lifecycle hook that is called after a component's view has been fully initialized.
  let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
  let base_image = new Image(); // Membuat image baru
  let frameRugby = new Image(); // membuat image baru yang nilainya akan diisi dengan frame dari folder asset/img
  frameRugby.src = this.frame;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0, 400, 400);
    context.drawImage(frameRugby, 0, 0);
  };
  base_image.src = this.base64Images;
  this.dataURL = this.myCanvas.nativeElement.toDataURL();
  console.log(this.base64Images);

}

applyFrame(frame: string){
  if(frame==='frame01'){
    this.frame = "assets/img/frame01.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame02'){
    this.frame = "assets/img/frame02.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame03'){
    this.frame = "assets/img/frame03.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame04'){
    this.frame = "assets/img/frame04.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame05'){
    this.frame = "assets/img/frame05.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame06'){
    this.frame = "assets/img/frame06.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame07'){
    this.frame = "assets/img/frame07.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame08'){
    this.frame = "assets/img/frame08.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame09'){
    this.frame = "assets/img/frame09.png";
    this.ngAfterViewInit();
  }
  else if(frame==='frame10'){
    this.frame = "assets/img/frame10.png";
    this.ngAfterViewInit();
  }
}


navigate(){
  this.navi.setRoot(TeamPhotos);
}

}
