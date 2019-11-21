import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerseverancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perseverance',
  templateUrl: 'perseverance.html',
})
export class PerseverancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {
      title :'Grit: the power of passion and perseverance ',
      video : 'https://www.youtube-nocookie.com/embed/H14bBuluwB8?rel=0'

    },
    
    {

      title :'Why it pays to work hard ',
      video : 'https://www.youtube-nocookie.com/embed/a6FvEwLBgBo?rel=0'

    },
    {

      title :'Hard work can change your Destiny',
      video : 'https://www.youtube-nocookie.com/embed/fR4yJYfZ_aA?rel=0'

    },
    {

      title :'Jack Ma - DO WHAT IS HARD ',
      video : 'https://www.youtube-nocookie.com/embed/OyGVCI8bMmE?rel=0'
      
    }
  ]
}
