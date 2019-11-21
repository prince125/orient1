import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Platform, } from 'ionic-angular';
import { MapPage } from '../map/map';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TutonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutone',
  templateUrl: 'tutone.html',
})

export class TutonePage {


  skill1:string;
  obstacle1:string;
  exposure1:string;
  behaviour1:string;

  constructor(public navCtrl: NavController, public menu: MenuController,public platform: Platform,
    public userservice: UserProvider,) {
  }


  loaddetails() {
    this.userservice.obstacledetails().then((res: any) => {
     this.obstacle1=res.obstacle1;
    
    })
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill1=res.skill1;
    
    })
  }
  load() {
    this.userservice.exposuredetails().then((res: any) => {
     this.exposure1=res.exposure1;
    
    })
  }

  loaddets(){
    this.userservice.behaviourdetails().then((res: any) => {
      this.behaviour1=res.behaviour1;

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
