import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import firebase from 'firebase';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
    
  }

  signin() {
   
    this.authservice.login(this.credentials).then((res: any) => {
      if(this.credentials.email==='admin@pofod.com'){
        this.navCtrl.setRoot('AdminPage')
      }
      else if (this.credentials.email.includes('.alumni@orienting.in')){
        this.navCtrl.setRoot('AlumniPage')

      }
      else if (this.credentials.email.includes('.trainer@orienting.in')){
        this.navCtrl.setRoot('TrainersPage')

      }
      else if (!res.code){
        this.navCtrl.setRoot('TabsPage');
      }
      else 
        alert(res);
    })
   
   
  }

  passwordreset() {
    this.navCtrl.push('PasswordresetPage');
  }
  signup() {
    this.navCtrl.push('SignupPage');
  }

  
   
}
