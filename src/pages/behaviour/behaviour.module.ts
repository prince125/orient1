import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BehaviourPage } from './behaviour';

@NgModule({
  declarations: [
    BehaviourPage,
  ],
  imports: [
    IonicPageModule.forChild(BehaviourPage),
  ],
})
export class BehaviourPageModule {}
