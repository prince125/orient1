import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TutgoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutgoal',
  templateUrl: 'tutgoal.html',
})
export class TutgoalPage {

  goal:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutgoalPage');
    this.loadgoal();
  }
  loadgoal(){
    this.userservice.goaldetails().then((res: any) => {
      this.goal=res.goal;
  })
  }

}
