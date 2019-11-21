import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuddiesonePage } from './buddiesone';

@NgModule({
  declarations: [
    BuddiesonePage,
  ],
  imports: [
    IonicPageModule.forChild(BuddiesonePage),
  ],
})
export class BuddiesonePageModule {}
