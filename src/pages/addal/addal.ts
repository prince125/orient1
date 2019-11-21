import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Toast } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the AddalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addal',
  templateUrl: 'addal.html',
})
export class AddalPage {
  alumni = {
    email: '',
    password: '',
    displayName:'',
    aldes:'',
    alskill:'',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddalPage');
  }


  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.alumni.email == '' || this.alumni.password == '' || this.alumni.displayName=='' ) {
      toaster.setMessage('All fields are required!');
      toaster.present();
    }
    else if (this.alumni.password.length < 6) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.userservice.addalumni(this.alumni).then((res: any) => {
        loader.dismiss();
        if (res.success){
          this.navCtrl.setRoot('AdminPage');
          toaster.setMessage('Successfully created!');
          toaster.present();

        }
          else{
            alert('Error' + res);
            toaster.setMessage('Check the credentials entered!');
          toaster.present();

          }
          
          
      })
    }
  } 
}
