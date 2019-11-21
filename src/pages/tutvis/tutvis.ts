import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TutvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutvis',
  templateUrl: 'tutvis.html',
})
export class TutvisPage {

  vision:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutvisPage');
    this.loadvision();
  }

  loadvision(){
    this.userservice.visiondetails().then((res: any) => {
      this.vision=res.vision;
  })
  }

}
