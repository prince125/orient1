import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-Feedback',
  templateUrl: 'Feedback.html'
})
export class FeedbackPage {
params:object;
pushPage:any;
fb={
  feedback:''
}
feedback:string;
constructor(public navCtrl: NavController,public loadingCtrl:LoadingController, public userservice :UserProvider) {

  }
  submit(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userfb(this.fb)
      loader.dismiss();
      
    this.navCtrl.setRoot(HomePage)
  }
  public anArray:any=[];
   }

