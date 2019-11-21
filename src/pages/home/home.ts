import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FeedbackPage} from "./../feedback/feedback";
import { Feedback2Page } from "./../feedback2/feedback2";
import { VisionPage } from '../vision/vision';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
params:object;
pushPage:any;

navigateToOtherPage(): void {
  this.navCtrl.push(FeedbackPage);
}
navigatePage() :void {
  this.navCtrl.push(Feedback2Page);
}
constructor(public navCtrl: NavController) {
  
  
 
  }
  orient(){
    this.navCtrl.setRoot(VisionPage);
  }
  public anArray:any=[];
   }
