import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeliefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-belief',
  templateUrl: 'belief.html',
})
export class BeliefPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'How to believe in yourself',
      video : 'https://www.youtube.com/embed/-ki9-oaPwHs?rel=0'

    },
    
    {

      title :'A guide to believing in yourself',
      video : 'https://www.youtube-nocookie.com/embed/jpRqbP9Nv9k?rel=0'

    },
    {

      title :'Believe in Yourself?',
      video : 'https://www.youtube-nocookie.com/embed/oupppoVp3Dk?rel=0'

    },

    {

      title :'Believe in Yourself',
      video : 'https://www.youtube-nocookie.com/embed/4mjRM7sbhFk?rel=0'

    },

    {

      title :'BELIEVE IN YOURSELF',
      video : 'https://www.youtube-nocookie.com/embed/AjZ0KbJcav0?rel=0'

    }
  ]

}
