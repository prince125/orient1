import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html',
})
export class LearningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'How To Learn Anything Faster',
      video : 'https://www.youtube-nocookie.com/embed/rA2XHWM__yE?rel=0'

    },
    
    {

      title :'Study Skills – Better learning',
      video : 'https://www.youtube-nocookie.com/embed/h9ven4N67i0?rel=0'

    },
    {

      title :'The 9 BEST Scientific Study Tips',
      video : 'https://www.youtube-nocookie.com/embed/p60rN9JEapg?rel=0'

    },

    {

      title :'Speed Learning: Learn In Half The Time',
      video : 'https://www.youtube-nocookie.com/embed/0r1LTe5KkSA?rel=0'

    }
  ]

}
