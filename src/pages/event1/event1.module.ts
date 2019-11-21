import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Event1Page } from './event1';

@NgModule({
  declarations: [
    Event1Page,
  ],
  imports: [
    IonicPageModule.forChild(Event1Page),
  ],
})
export class Event1PageModule {}
