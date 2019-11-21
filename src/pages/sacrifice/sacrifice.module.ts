import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SacrificePage } from './sacrifice';

@NgModule({
  declarations: [
    SacrificePage,
  ],
  imports: [
    IonicPageModule.forChild(SacrificePage),
  ],
})
export class SacrificePageModule {}
