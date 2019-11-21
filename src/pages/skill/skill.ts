import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/user';
@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {

  uskill ={
    skill1:'',
    skill2:'',
    skill3:'',
  }
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController,
    public afauth:AngularFireAuth,public userservice: UserProvider) {
      
      
  }

  Add(){
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
    this.userservice.userskill(this.uskill)
    loader.dismiss();
    
    this.navCtrl.push('ObstaclesPage');
  
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
    
  }

}
