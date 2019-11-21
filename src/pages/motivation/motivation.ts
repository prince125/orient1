import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MotivationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motivation',
  templateUrl: 'motivation.html',
})
export class MotivationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'How to Stay Motivated all the time? ',
      video : 'https://www.youtube-nocookie.com/embed/t6Kw3n9CNrc?rel=0'

    },
    
    {

      title :'This Simple Trick Will Keep You Motivated Everyday ',
      video : 'https://www.youtube-nocookie.com/embed/sTw_iAhonJ4?rel=0'

    },
    {

      title :'The psychology of self-motivation',
      video : 'https://www.youtube-nocookie.com/embed/7sxpKhIbr0E?rel=0'

    },

    {

      title :'5 LIFE HACKS That Will MOTIVATE You To Do ANYTHING ',
      video : 'https://www.youtube-nocookie.com/embed/aG-1IRwYWqU?rel=0'

    }
  ]
}
