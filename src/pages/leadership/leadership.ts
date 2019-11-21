import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeadershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leadership',
  templateUrl: 'leadership.html',
})
export class LeadershipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {

      title :'Why good leaders make you feel safe',
      video : 'https://www.youtube-nocookie.com/embed/lmyZMtPVodo'

    },
    
    {

      title :'Speak like a leader',
      video : 'https://www.youtube-nocookie.com/embed/bGBamfWasNQ?rel=0'

    },
    {

      title :'Learn how to manage people and be a better leader',
      video : 'https://www.youtube-nocookie.com/embed/PWmhl6rzVpM?rel=0'

    },

    {

      title :'What it takes to be a great leader',
      video : 'https://www.youtube-nocookie.com/embed/aUYSDEYdmzw?rel=0'

    },
    {

      title :'Great leadership starts with self-leadership',
      video : 'https://www.youtube-nocookie.com/embed/vlpKyLklDDY?rel=0'

    }
  ]
}
