import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeditationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meditation',
  templateUrl: 'meditation.html',
})
export class MeditationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'The Scientific Power of Meditation',
      video : 'https://www.youtube-nocookie.com/embed/Aw71zanwMnY?rel=0'

    },
    
    {

      title :'How To Meditate For Beginners',
      video : 'https://www.youtube-nocookie.com/embed/mMMerxh_12U?rel=0'

    },
    {

      title :'Why Meditate?',
      video : 'https://www.youtube-nocookie.com/embed/aAVPDYhW_nw?rel=0'

    },

    {

      title :'Dalai Lama - Why meditate?',
      video : 'https://www.youtube-nocookie.com/embed/yTCRdM71j2E?rel=0'

    }
  ]
}
