import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotivationPage } from './motivation';

@NgModule({
  declarations: [
    MotivationPage,
  ],
  imports: [
    IonicPageModule.forChild(MotivationPage),
  ],
})
export class MotivationPageModule {}
