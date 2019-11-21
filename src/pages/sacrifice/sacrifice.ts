import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SacrificePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sacrifice',
  templateUrl: 'sacrifice.html',
})
export class SacrificePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {
      title :'Sacrifice Is Necessary To Succeed ',
      video : 'https://www.youtube-nocookie.com/embed/pYJFixDC5l0?rel=0'

    },
    
    {

      title :'The Importance of Sacrifice',
      video : 'https://www.youtube-nocookie.com/embed/OKBYSDb9IEg?rel=0'

    },
    {

      title :'Why self sacrifice is necessary',
      video : 'https://www.youtube-nocookie.com/embed/qEdWxCnkL2Q?rel=0'

    },
    {

      title :'Selflessness = Sacrifice',
      video : 'https://www.youtube-nocookie.com/embed/Gq50npA6s2E?rel=0'
      
    }
  ]


}
