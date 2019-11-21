import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

  forum(){
    this.navCtrl.push('ForumPage')
  }

  profile(){
    this.navCtrl.push('TrainerprofilePage')
  }
}
