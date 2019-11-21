import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfidencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confidence',
  templateUrl: 'confidence.html',
})
export class ConfidencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {

      title :'The Skill of Confidence & How to Take Control of Your Mind!',
      video : 'https://www.youtube-nocookie.com/embed/TVAcs5AHhF4?rel=0'

    },
    
    {

      title :'The skill of self confidence',
      video : 'https://www.youtube-nocookie.com/embed/w-HYZv6HzAs?rel=0  '

    },
    {

      title :'Presenting & Public Speaking Tips',
      video : 'https://www.youtube-nocookie.com/embed/Q5WT2vweFRY?rel=0'

    },

    {

      title :'The surprising secret to speaking with confidence ',
      video : 'https://www.youtube-nocookie.com/embed/a2MR5XbJtXU?rel=0'
    }
  ]

}
