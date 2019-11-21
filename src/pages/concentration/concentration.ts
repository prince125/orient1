import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConcentrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concentration',
  templateUrl: 'concentration.html',
})
export class ConcentrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'5 Ways to Build Focus and Concentration',
      video : 'https://www.youtube-nocookie.com/embed/a-KCZ1sghLY?rel=0'

    },
    
    {

      title :'Top Scientific Ways To Improve Your Concentration',
      video : 'https://www.youtube-nocookie.com/embed/WAQoUJrHrSQ?rel=0'

    },
    {

      title :'How to Focus Better ',
      video : 'https://www.youtube-nocookie.com/embed/SsoCFt4BgV8?rel=0'

    },

    {

      title :'How to Build FOCUS and CONCENTRATION',
      video : 'https://www.youtube-nocookie.com/embed/CnlSRI0AIrQ?rel=0'

    }
  ]


}
