import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalitiesPage } from './personalities';

@NgModule({
  declarations: [
    PersonalitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalitiesPage),
  ],
})
export class PersonalitiesPageModule {}
