import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { News } from '../pages/News/news';
import { Fixtures } from '../pages/Fixtures/fixtures';
import { Rugby101 } from '../pages/Rugby101/rugby101';
import { RugbyClubs } from '../pages/RugbyClubs/rugbyclubs';
import { TeamPhotos } from '../pages/TeammatePhotos/teamphotos';
import { FrameApplier } from '../pages/FrameApplier/frameapplier';


import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp, News, Fixtures, Rugby101, RugbyClubs, TeamPhotos, FrameApplier
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, News, Fixtures, Rugby101, RugbyClubs, TeamPhotos, FrameApplier
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
