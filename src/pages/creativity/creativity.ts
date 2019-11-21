import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreativityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creativity',
  templateUrl: 'creativity.html',
})
export class CreativityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'The science of improving your brain’s creativity',
      video : 'https://www.youtube-nocookie.com/embed/y44GBM99JOA?rel=0'

    },
    
    {

      title :'How To Boost Your Creativity',
      video : 'https://www.youtube-nocookie.com/embed/_NHu6gM91aA?rel=0'

    },
    {

      title :'How To Have Better Creative Thinking',
      video : 'https://www.youtube-nocookie.com/embed/zO2LdDpx-Tc?rel=0'

    },

    {

      title :'Creative thinking',
      video : 'https://www.youtube-nocookie.com/embed/bEusrD8g-dM?rel=0'

    }
  ]

}
