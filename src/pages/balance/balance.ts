import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EngiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'Work-Life Balance',
      video : 'https://www.youtube-nocookie.com/embed/MPR3o6Hnf2g?rel=0'

    },
    
    {

      title :'Redefining work-life balance',
      video : 'https://www.youtube-nocookie.com/embed/YFw-1zfZwZE?rel=0'

    },
    {

      title :'The Reason People Lose Their Balance - Sadhguru',
      video : 'https://www.youtube-nocookie.com/embed/YVLxIhCHhpg?rel=0'

    },

    {

      title :'How 7 Body Points Can Balance Your Life',
      video : 'https://www.youtube-nocookie.com/embed/xxfl01GwnLU?rel=0'

    },
    {

      title :'How to make work-life balance work',
      video : 'https://www.youtube-nocookie.com/embed/jdpIKXLLYYM'

    },

    {

      title :'What one skill = an awesome life? ',
      video : 'https://www.youtube-nocookie.com/embed/1EHZAQmw2JA'

    }
  ]
}

