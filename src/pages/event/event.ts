import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the EventPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  b1d={
    message1:'',
  startdate1:'',
  enddate1:'',
  day1:'',
  week1:'',
  month1:'',
  frequency1:'',

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
      this.userservice.b1data(this.b1d)
      loader.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Success!',
        subTitle: 'Activity saved successfully',
        buttons: ['OK']
      });
      alert.present();
      
    }

         
     
       
    }

