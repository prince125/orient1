import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObstaclesPage } from './obstacles';

@NgModule({
  declarations: [
    ObstaclesPage,
  ],
  imports: [
    IonicPageModule.forChild(ObstaclesPage),
  ],
})
export class ObstaclesPageModule {}
