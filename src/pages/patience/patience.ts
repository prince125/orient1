import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patience',
  templateUrl: 'patience.html',
})
export class PatiencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {

      title :'How to Remain Calm With People',
      video : 'https://www.youtube-nocookie.com/embed/du035tg-SwY?rel=0?'

    },
    
    {

      title :'The secret to self control',
      video : 'https://www.youtube-nocookie.com/embed/tTb3d5cjSFI?rel=0'

    },
    {

      title :'TPatience - Who has time for that?',
      video : 'https://www.youtube-nocookie.com/embed/IeuWP26GtTI?rel=0'

    },

    {

      title :'Patience | Elise Matsusaka',
      video : 'https://www.youtube-nocookie.com/embed/7y86Oj_LqWU?rel=0'

    }
  ]
}
