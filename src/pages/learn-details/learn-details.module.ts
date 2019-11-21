import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearnDetailsPage } from './learn-details';

@NgModule({
  declarations: [
    LearnDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearnDetailsPage),
  ],
})
export class LearnDetailsPageModule {}
