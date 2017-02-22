import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { News } from '../pages/News/news';
import { Fixtures } from '../pages/Fixtures/fixtures';
import { Rugby101 } from '../pages/Rugby101/rugby101';
import { RugbyClubs } from '../pages/RugbyClubs/rugbyclubs';
import { TeamPhotos } from '../pages/TeammatePhotos/teamphotos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = News;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: News },
      { title: 'Fixtures and Results', component: Fixtures },
      { title: 'Rugby 101', component: Rugby101 },
      { title: 'Rugby Clubs', component: RugbyClubs },
      { title: 'Teammate Photos', component: TeamPhotos }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
