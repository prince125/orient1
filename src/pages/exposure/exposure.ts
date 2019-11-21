import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ExposurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exposure',
  templateUrl: 'exposure.html',
})
export class ExposurePage {
  uex={
    exposure1:'',
    exposure2:'',
    exposure3:'',
  }

  skill1:string;
  skill2:string;
  skill3:string;
  obstacle1:string;
  obstacle2:string;
  obstacle3:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExposurePage');
    this.loaduserdetails();
    this.loaddetails();
  }

  gobe(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userexposure(this.uex)
      loader.dismiss();
      
    this.navCtrl.push('BehaviourPage')
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill1=res.skill1;
     this.skill2=res.skill2;
      this.skill3=res.skill3;
    
    })
  }
  loaddetails() {
    this.userservice.obstacledetails().then((res: any) => {
     this.obstacle1=res.obstacle1;
     this.obstacle2=res.obstacle2;
      this.obstacle3=res.obstacle3;
    
    })
  }
}
