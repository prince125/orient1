import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the PersonalitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalities',
  templateUrl: 'personalities.html',
})
export class PersonalitiesPage {
  currentuser = {
    p1:'',
    p2:'',
    p3:'',
  }


 constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalitiesPage');
  }
  go(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.updateuser(this.currentuser)
      loader.dismiss();
      this.navCtrl.push('OtpPage');
    
    }
        
     
  }


