import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the AddtrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtr',
  templateUrl: 'addtr.html',
})
export class AddtrPage {
  trainer= {
    email: '',
    password: '',
    displayName:'',
    des:'',
    spl:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtrPage');
  }

  signup() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.trainer.email == '' || this.trainer.password == '' || this.trainer.displayName=='' ) {
      toaster.setMessage('All fields are required!');
      toaster.present();
    }
    else if (this.trainer.password.length < 6) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.userservice.addtrainer(this.trainer).then((res: any) => {
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
