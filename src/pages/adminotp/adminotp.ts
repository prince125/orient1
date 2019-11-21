import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OtpProvider } from '../../providers/otp/otp';

/**
 * Generated class for the AdminotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminotp',
  templateUrl: 'adminotp.html',
})
export class AdminotpPage {

  randomNo: string;
  
  otp={
    randomNo:''
  }

  constructor(public us:OtpProvider, public toastController: ToastController) {
  }

  
  savedb(){
    this.us.addotp(this.otp)
    const toast = this.toastController.create({
    message: 'The One time password has been updated',
    duration: 2000
    });
    toast.present();
    
  }
}
