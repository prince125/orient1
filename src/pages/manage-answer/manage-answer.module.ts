import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageAnswerPage } from './manage-answer';

@NgModule({
  declarations: [
    ManageAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageAnswerPage),
  ],
})
export class ManageAnswerPageModule {}
