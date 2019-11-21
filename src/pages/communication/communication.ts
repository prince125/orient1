import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommunicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'Think Fast, Talk Smart',
      video : 'https://www.youtube-nocookie.com/embed/HAnw168huqA?rel=0'

    },
    
    {

      title :'5 Ways to Improve your communication',
      video : 'https://www.youtube-nocookie.com/embed/xr1q-uBtIH4?rel=0'

    },
    {

      title :'How to improve Communication Skills?',
      video : 'https://www.youtube-nocookie.com/embed/hE6I9apUvrk?rel=0'

    },

    {

      title :'3 Ways to Improve Your Communication Skills',
      video : 'https://www.youtube-nocookie.com/embed/D5hMN_XkPQA?rel=0'

    }
  ]
}
