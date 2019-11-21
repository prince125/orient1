import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntrepreneurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrepreneur',
  templateUrl: 'entrepreneur.html',
})
export class EntrepreneurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {

      title :'50 Entrepreneurs share priceless advice ',
      video : 'https://www.youtube.com/embed/QoqohmccTSc?rel=0'

    },
    
    {

      title :'The 15 Characteristics of Effective Entrepreneurs ',
      video : 'https://www.youtube.com/embed/sOjeQV5pHh4?rel=0'

    },
    {

      title :'How To Become A Millionaire, Step-By-Step',
      video : 'https://www.youtube.com/embed/jfV2CnNQJCg?rel=0'

    },

    {

      title :'Devi’s story: Digital skills helped her become a successful entrepreneur ',
      video : 'https://www.youtube.com/embed/eVDeOA5_0uk?rel=0'

    },
    {

      title :'How to be an Entrepreneur ',
      video : 'https://www.youtube.com/embed/lJjILQu2xM8?rel=0'

    }
  ]

}
