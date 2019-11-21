import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventPage} from '../event/event';
import {Event1Page} from '../event1/event1';
import {Event2Page} from '../event2/event2';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html',
})
export class PlanPage {

  behaviour1:string;
  behaviour2:string;
  behaviour3:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public userservice: UserProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanPage');
    this.loaddetails();
  }

  loaddetails() {
    this.userservice.behaviourdetails().then((res: any) => {
     this.behaviour1=res.behaviour1;
     this.behaviour2=res.behaviour2;
      this.behaviour3=res.behaviour3;
    
    })
  }

  addEvent() {
    this.navCtrl.push(EventPage);
  }
  
  addEvent1() {
    this.navCtrl.push(Event1Page);
  }
  
  addEvent2() {
    this.navCtrl.push(Event2Page);
  }
  
  submit(){
    this.navCtrl.setRoot('TabsPage')
  }

}
