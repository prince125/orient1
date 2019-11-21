import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-feedback2',
  templateUrl: 'feedback2.html',
})

export class Feedback2Page {
params:object;
pushPage:any;
fb1={
  feedback:''
}
feedback:string;
constructor(public navCtrl: NavController, public userservice: UserProvider,
  public loadingCtrl: LoadingController) {

  }
  public anArray:any=[];
  submit(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userfb1(this.fb1)
      loader.dismiss();
      
    this.navCtrl.setRoot(HomePage)
  }

}
