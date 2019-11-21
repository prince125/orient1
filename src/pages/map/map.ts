import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ModalPage } from '../modal/modal';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

 
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public userservice: UserProvider,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    
    const popover=this.popoverCtrl.create(ModalPage);

    popover.present();

   
   
    
  }

  tuts1(){
    
    const popover = this.popoverCtrl.create('TutonePage');
    popover.present();
  
  }

  tuts2(){
    const popover = this.popoverCtrl.create('TuttwoPage');
    popover.present();

  }

  tuts3(){
    const popover = this.popoverCtrl.create('TutthreePage');
    popover.present();
  }

  tutg(){
    const popover = this.popoverCtrl.create('TutgoalPage');
    popover.present();

  }

  tutvis(){
    const popover = this.popoverCtrl.create('TutvisPage');
    popover.present();
  }
  







}
