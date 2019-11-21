import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumonePage } from './forumone';

@NgModule({
  declarations: [
    ForumonePage,
  ],
  imports: [
    IonicPageModule.forChild(ForumonePage),
  ],
})
export class ForumonePageModule {}
