import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stress',
  templateUrl: 'stress.html',
})
export class StressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    
    {
      title :'Why Am I Stressed? - Sadhguru',
      video : 'https://www.youtube-nocookie.com/embed/3J-cYxxHQGQ?rel=0'

    },
    
    {

      title :'How to channel your stress to help you succeed',
      video : 'https://www.youtube-nocookie.com/embed/yrwWvdM_Yns?rel=0'

    },
    {

      title :'How to make stress your friend',
      video : 'https://www.youtube-nocookie.com/embed/RcGyVTAoXEU?rel=0'

    },
    {

      title :'Managing Stress ',
      video : 'https://www.youtube-nocookie.com/embed/hnpQrMqDoqE?rel=0'
      
    }
  ]


}
