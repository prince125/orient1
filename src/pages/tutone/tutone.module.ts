import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutonePage } from './tutone';

@NgModule({
  declarations: [
    TutonePage,
  ],
  imports: [
    IonicPageModule.forChild(TutonePage),
  ],
})
export class TutonePageModule {}
