import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the Event2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event2',
  templateUrl: 'event2.html',
})
export class Event2Page {

  b3d={
    message3:'',
  startdate3:'',
  enddate3:'',
  day3:'',
  week3:'',
  month3:'',
  frequency3:'',

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
      this.userservice.b3data(this.b3d)
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Activity saved successfully',
        buttons: ['OK']
      });
      alert.present();
      
    }

         
     
       
    }


