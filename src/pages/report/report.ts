import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  behaviour1:string;
  behaviour2:string;
  behaviour3:string;
  startdate1:string;
  startdate2:string;
  startdate3:string;
  enddate1:string;
  enddate2:string;
  enddate3:string;
  frequency1:string;
  frequency2:string;
  frequency3:string;
  day1:string;
  day2:string;
  day3:string;
  week1:string;
  week2:string;
  week3:string;
  month1:string;
  month2:string;
  month3:string;
  message1:string;
  message2:string;
  message3:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    this.loaddetails();
    this.loadb1();
    this.loadb2();
    this.loadb3()
  }

  loaddetails() {
    this.userservice.behaviourdetails().then((res: any) => {
     this.behaviour1=res.behaviour1;
     this.behaviour2=res.behaviour2;
      this.behaviour3=res.behaviour3;
    
    })
  }

  loadb1(){
    this.userservice.b1det().then((res: any) => {
      this.startdate1=res.startdate1;
      this.enddate1=res.enddate1;
      this.day1=res.day1;
      this.week1=res.week1;
      this.month1=res.month1;
      this.frequency1=res.frequency1;
      this.message1=res.message1;
     
     })
    

  }

  loadb2(){

    this.userservice.b2det().then((res: any) => {
      this.startdate2=res.startdate2;
      this.enddate2=res.enddate2;
      this.day2=res.day2;
      this.week2=res.week2;
      this.month2=res.month2;
      this.frequency2=res.frequency2;
      this.message2=res.message2;
     
     })
    

  }

  loadb3(){

    this.userservice.b3det().then((res: any) => {
      this.startdate3=res.startdate3;
      this.enddate3=res.enddate3;
      this.day3=res.day3;
      this.week3=res.week3;
      this.month3=res.month3;
      this.frequency3=res.frequency3;
      this.message3=res.message3;
     
     })

  }
  
}
