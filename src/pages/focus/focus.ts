import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class FocusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'How To Stay Focused  ',
      video : 'https://www.youtube.com/embed/WhbYBb0huMs?rel=0'

    },
    
    {

      title :'Stay Focused: 11 Psychological Tips ',
      video : 'https://www.youtube.com/embed/8RV_vYsHceQ?rel=0'

    },
    {

      title :'Unwavering Focus',
      video : 'https://www.youtube.com/embed/4O2JK_94g3Y?rel=0'

    },

    {

      title :'How to Focus Intensely ',
      video : 'https://www.youtube.com/embed/wfKv2qG8d_w?rel=0'

    }
  ]

}
