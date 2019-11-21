import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EtiquettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etiquette',
  templateUrl: 'etiquette.html',
})
export class EtiquettePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'Good Manners: What to Say and Do (Polite English)',
      video : 'https://www.youtube.com/embed/4-8AlriF908?rel=0'

    },
    
    {

      title :'25 Etiquette Rules You Should Know And Follow ',
      video : 'https://www.youtube.com/embed/k1PVUa2TPaA?rel=0'

    },
    {

      title :'Table Manners 101: Basic Dining Etiquette',
      video : 'https://www.youtube.com/embed/FDGGv7z5r2c?rel=0'

    },

    {

      title :'How to Be a Good Friend | Good Manners',
      video : 'https://www.youtube.com/embed/n-QJLWWBUY4?rel=0'

    }
  ]

}
