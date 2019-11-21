import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TutthreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutthree',
  templateUrl: 'tutthree.html',
})
export class TutthreePage {

  skill3:string;
  obstacle3:string;
  exposure3:string;
  behaviour3:string;

  constructor(public navCtrl: NavController,public platform: Platform,
    public userservice: UserProvider,) {
  }

  loaddetails() {
    this.userservice.obstacledetails().then((res: any) => {
     this.obstacle3=res.obstacle3;
    
    })
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill3=res.skill3;
    
    })
  }
  load() {
    this.userservice.exposuredetails().then((res: any) => {
     this.exposure3=res.exposure3;
    
    })
  }

  loaddets(){
    this.userservice.behaviourdetails().then((res: any) => {
      this.behaviour3=res.behaviour3;

  })
}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.load();
    this.loaddetails();
    this.loaddets();
    this.loaduserdetails();
    
  }

}
