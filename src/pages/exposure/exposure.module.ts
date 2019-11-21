import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExposurePage } from './exposure';

@NgModule({
  declarations: [
    ExposurePage,
  ],
  imports: [
    IonicPageModule.forChild(ExposurePage),
  ],
})
export class ExposurePageModule {}
