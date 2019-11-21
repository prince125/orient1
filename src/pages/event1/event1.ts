import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the Event1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event1',
  templateUrl: 'event1.html',
})
export class Event1Page {

  b2d={
    message2:'',
  startdate2:'',
  enddate2:'',
  day2:'',
  week2:'',
  month2:'',
  frequency2:'',

  }
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    public alertCtrl: AlertController,public loadingCtrl:LoadingController,
    public userservice: UserProvider,  public afauth:AngularFireAuth  ) 
    {
      
    }

    Add(){
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      loader.present();
      this.userservice.b2data(this.b2d)
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Activity saved successfully',
        buttons: ['OK']
      });
      alert.present();
      
    }

         
     
       
    }

