import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the ObstaclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obstacles',
  templateUrl: 'obstacles.html',
})
export class ObstaclesPage {
  uobs={
    obstacle1:'',
    obstacle2:'',
    obstacle3:'',
  }
  skill1:string;
  skill2:string;
  skill3:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObstaclesPage');
   this.loaduserdetails();
  }

  goex(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userobstacle(this.uobs)
      loader.dismiss();
      
      this.navCtrl.setRoot('ExposurePage');
  }

  loaduserdetails() {
    this.userservice.skilldetails().then((res: any) => {
     this.skill1=res.skill1;
     this.skill2=res.skill2;
      this.skill3=res.skill3;
    
    })
  }

}
