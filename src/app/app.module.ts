import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { News } from '../pages/News/news';
import { Fixtures } from '../pages/Fixtures/fixtures';
import { Rugby101 } from '../pages/Rugby101/rugby101';
import { RugbyClubs } from '../pages/RugbyClubs/rugbyclubs';
import { TeamPhotos } from '../pages/TeammatePhotos/teamphotos';

@NgModule({
  declarations: [
    MyApp,
  News, Fixtures, Rugby101, RugbyClubs, TeamPhotos
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

      News, Fixtures, Rugby101, RugbyClubs, TeamPhotos
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
