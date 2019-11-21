import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'Firebase';
@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  show: boolean = true;
  ref= firebase.database().ref('/otp');
 
  password: string
  randomNo:string
  public otp=[]

  constructor(public navCtrl: NavController, public db: AngularFireDatabase,public toastController: ToastController) {
  
    this.getDataFromFirebase();
    }
    public anArray:any=[];
    getDataFromFirebase(){
      
    this.ref.on('value', personSnapshot => {
    this.otp = personSnapshot.val(); });
    
      }    
      
   check()
   {
    
    var index=this.password.localeCompare("this.otp");  
     
    console.log(index);
    if(index===-1)
    {
      this.navCtrl.setRoot(HomePage);
    }
    else{
      const toast =this.toastController.create({
        message: 'Invalid password',
        duration: 2000
      });
      toast.present();
    }
   }
 }
  /* for (let i = 1; i <= this.otp.length; i++) {
      if(this.password[i]===this.otp[i])
      {
      index = 0;
      }
    }*/
  