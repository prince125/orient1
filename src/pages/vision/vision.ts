import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';



@IonicPage()
@Component({
  selector: 'page-vision',
  templateUrl: 'vision.html',
})
export class VisionPage {

  public _vision: any;
  uvis={
    vision:'',
  }
  ugo={
    goal:'',
  }
  vision:string;
  goal:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,
    public loadingCtrl: LoadingController) {

   
  }
  vigo(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.uservision(this.uvis)
    this.userservice.usergoal(this.ugo)
      loader.dismiss();
      this.navCtrl.push('SkillPage')
      
  }




 
}