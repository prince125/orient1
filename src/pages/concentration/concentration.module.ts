import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcentrationPage } from './concentration';

@NgModule({
  declarations: [
    ConcentrationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcentrationPage),
  ],
})
export class ConcentrationPageModule {}
