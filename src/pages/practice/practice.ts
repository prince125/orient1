import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {
      title :'What Are You Practicing Right Now?',
      video : 'https://www.youtube-nocookie.com/embed/AkXA8rgqiss?rel=0'

    },
    
    {

      title :'Practice everyday ',
      video : 'https://www.youtube-nocookie.com/embed/nIp5Tfkgwf4?rel=0'

    },
    {

      title :'How to practice effectively...for just about anything ',
      video : 'https://www.youtube-nocookie.com/embed/f2O6mQkFiiw?rel=0'

    },
    {

      title :'PRACTICE',
      video : 'https://www.youtube-nocookie.com/embed/IRKVyqh6QcM?rel=0'
      
    }
  ]

}
