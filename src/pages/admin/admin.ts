import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdduserPage } from '../adduser/adduser';
import { AdminotpPage } from '../adminotp/adminotp';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }


addusers(){
this.navCtrl.push(AdduserPage)
  }
password(){
  this.navCtrl.push(AdminotpPage)
  }

  logout() {
    this.userservice.afireauth.auth.signOut().then(() => {
   this.navCtrl.setRoot(LoginPage);
   }
   );

}
}

  

