import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TuttwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuttwo',
  templateUrl: 'tuttwo.html',
})
export class TuttwoPage {

  skill2:string;
  obstacle2:string;
  exposure2:string;
  behaviour2:string;

  constructor(public navCtrl: NavController,public platform: Platform,
    public userservice: UserProvider,) {
  }



  loaddetails() {
    this.userservice.obstacledetails().then((res: any) => {
     this.obstacle2=res.obstacle2;
    
    })
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill2=res.skill2;
    
    })
  }
  load() {
    this.userservice.exposuredetails().then((res: any) => {
     this.exposure2=res.exposure2;
    
    })
  }

  loaddets(){
    this.userservice.behaviourdetails().then((res: any) => {
      this.behaviour2=res.behaviour2;

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
