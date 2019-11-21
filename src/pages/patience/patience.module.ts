import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatiencePage } from './patience';

@NgModule({
  declarations: [
    PatiencePage,
  ],
  imports: [
    IonicPageModule.forChild(PatiencePage),
  ],
})
export class PatiencePageModule {}
