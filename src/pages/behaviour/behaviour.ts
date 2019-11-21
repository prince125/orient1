import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { PlanPage } from '../plan/plan';

/**
 * Generated class for the BehaviourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-behaviour',
  templateUrl: 'behaviour.html',
})
export class BehaviourPage {
  ube={
    behaviour1:'',
    behaviour2:'',
    behaviour3:'',
  }

  skill1:string;
  skill2:string;
  skill3:string;
  obstacle1:string;
  obstacle2:string;
  obstacle3:string;
  exposure1:string;
  exposure2:string;
  exposure3:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BehaviourPage');
    this.loaddetails();
    this.loaduserdetails();
    this.load();
  }

  goda(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userbehaviour(this.ube)
      loader.dismiss();
    this.navCtrl.push(PlanPage)
  }

 
  loaddetails() {
    this.userservice.obstacledetails().then((res: any) => {
     this.obstacle1=res.obstacle1;
     this.obstacle2=res.obstacle2;
      this.obstacle3=res.obstacle3;
    
    })
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill1=res.skill1;
     this.skill2=res.skill2;
      this.skill3=res.skill3;
    
    })
  }
  load() {
    this.userservice.exposuredetails().then((res: any) => {
     this.exposure1=res.exposure1;
     this.exposure2=res.exposure2;
      this.exposure3=res.exposure3;
    
    })
  }
}
