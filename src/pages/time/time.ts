import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {
      title :'How to gain control of your free time ',
      video : 'https://www.youtube-nocookie.com/embed/n3kNlFMXslo?rel=0'

    },
    
    {

      title :'How To Multiply Your Time ',
      video : 'https://www.youtube-nocookie.com/embed/y2X7c9TUQJ8?rel=0'

    },
    {

      title :'The Philosophy of Time Management ',
      video : 'https://www.youtube-nocookie.com/embed/WXBA4eWskrc?rel=0'

    },
    {

      title :'Timeboxing: Elon Musks Time Management Method',
      video : 'https://www.youtube-nocookie.com/embed/fbAYK4KQrso?rel=0'
      
    }
  ]


}
