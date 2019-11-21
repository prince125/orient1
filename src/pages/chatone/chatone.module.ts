import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatonePage } from './chatone';

@NgModule({
  declarations: [
    ChatonePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatonePage),
  ],
})
export class ChatonePageModule {}
